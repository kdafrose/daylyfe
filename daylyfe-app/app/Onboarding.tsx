import { StyleSheet, View, TouchableOpacity, TextInput, ScrollView, Animated, Dimensions } from 'react-native'
import React, { useState, useRef } from 'react'
import SerifText from '@/components/SerifText'
import { router } from 'expo-router'

const { width } = Dimensions.get('window')

// ─── Types ───────────────────────────────────────────────────────────────────
interface Goals {
  budgetDaily: string
  stepsDaily: string
  waterDaily: string
}

// ─── Step configuration ───────────────────────────────────────────────────────
const STEPS = [
  {
    key: 'welcome',
    emoji: '👋',
    title: 'Welcome to DayLyfe',
    subtitle: "Let's personalize your experience in just a few steps.",
    inputKey: null,
    inputLabel: null,
    inputPlaceholder: null,
    unit: null,
  },
  {
    key: 'budget',
    emoji: '💸',
    title: 'Daily Budget',
    subtitle: "How much do you want to spend each day? We'll help you stay on track.",
    inputKey: 'budgetDaily' as keyof Goals,
    inputLabel: 'Daily budget',
    inputPlaceholder: '50',
    unit: '$',
  },
  {
    key: 'steps',
    emoji: '🏃',
    title: 'Step Goal',
    subtitle: "Walking 8,000–10,000 steps a day has big health benefits. What's yours?",
    inputKey: 'stepsDaily' as keyof Goals,
    inputLabel: 'Daily steps',
    inputPlaceholder: '10000',
    unit: 'steps',
  },
  {
    key: 'water',
    emoji: '💧',
    title: 'Water Intake',
    subtitle: "Staying hydrated is key. How many litres do you want to drink daily?",
    inputKey: 'waterDaily' as keyof Goals,
    inputLabel: 'Daily water',
    inputPlaceholder: '3',
    unit: 'L',
  },
  {
    key: 'done',
    emoji: '🎉',
    title: "You're all set!",
    subtitle: "Your goals are saved. You can always update them in Settings.",
    inputKey: null,
    inputLabel: null,
    inputPlaceholder: null,
    unit: null,
  },
]

// ─── Dot indicator ────────────────────────────────────────────────────────────
const StepDots = ({ current, total }: { current: number; total: number }) => (
  <View style={styles.dotsRow}>
    {Array.from({ length: total }).map((_, i) => (
      <View
        key={i}
        style={[styles.dot, i === current && styles.dotActive]}
      />
    ))}
  </View>
)

// ─── Main Component ───────────────────────────────────────────────────────────
const Onboarding = () => {
  const [step, setStep] = useState(0)
  const [goals, setGoals] = useState<Goals>({
    budgetDaily: '',
    stepsDaily: '',
    waterDaily: '',
  })

  const fadeAnim = useRef(new Animated.Value(1)).current
  const slideAnim = useRef(new Animated.Value(0)).current

  const currentStep = STEPS[step]
  const isLast = step === STEPS.length - 1
  const isFirst = step === 0

  // Animate between steps
  const animateTransition = (nextStep: number) => {
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 0, duration: 180, useNativeDriver: true }),
      Animated.timing(slideAnim, { toValue: -30, duration: 180, useNativeDriver: true }),
    ]).start(() => {
      setStep(nextStep)
      slideAnim.setValue(30)
      Animated.parallel([
        Animated.timing(fadeAnim, { toValue: 1, duration: 220, useNativeDriver: true }),
        Animated.timing(slideAnim, { toValue: 0, duration: 220, useNativeDriver: true }),
      ]).start()
    })
  }

  const handleNext = () => {
    if (isLast) {
      // TODO: Save goals to backend / async storage here
      // e.g. await saveUserGoals(goals)
      console.log(goals.budgetDaily, goals.stepsDaily, goals.waterDaily)
      router.replace('/') // Navigate to home
    } else {
      animateTransition(step + 1)
    }
  }

  const handleBack = () => {
    if (!isFirst) animateTransition(step - 1)
  }

  const updateGoal = (key: keyof Goals, value: string) => {
    setGoals(prev => ({ ...prev, [key]: value }))
  }

  // Validate current step before allowing Next
  const canProceed = () => {
    if (!currentStep.inputKey) return true // welcome / done screens
    return goals[currentStep.inputKey].trim().length > 0
  }

  return (
    <View style={styles.container}>
      {/* Background blobs for visual warmth */}
      <View style={[styles.blob, styles.blobTop]} />
      <View style={[styles.blob, styles.blobBottom]} />

      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* Step dots */}
        <StepDots current={step} total={STEPS.length} />

        {/* Animated content card */}
        <Animated.View
          style={[
            styles.card,
            { opacity: fadeAnim, transform: [{ translateY: slideAnim }] },
          ]}
        >
          {/* Emoji */}
          <SerifText style={styles.emoji}>{currentStep.emoji}</SerifText>

          {/* Title */}
          <SerifText style={styles.title}>{currentStep.title}</SerifText>

          {/* Subtitle */}
          <SerifText style={styles.subtitle}>{currentStep.subtitle}</SerifText>

          {/* Input (if applicable) */}
          {currentStep.inputKey && (
            <View style={styles.inputWrapper}>
              {currentStep.unit && (
                <SerifText style={styles.unitLabel}>{currentStep.unit}</SerifText>
              )}
              <TextInput
                style={styles.input}
                value={goals[currentStep.inputKey]}
                onChangeText={val => updateGoal(currentStep.inputKey!, val)}
                placeholder={currentStep.inputPlaceholder ?? ''}
                placeholderTextColor="#C4B5A5"
                keyboardType="numeric"
              />
              <SerifText style={styles.inputSubLabel}>{currentStep.inputLabel}</SerifText>
            </View>
          )}

          {/* Done screen: summary */}
          {currentStep.key === 'done' && (
            <View style={styles.summaryBox}>
              <SummaryRow emoji="💸" label="Budget" value={`$${goals.budgetDaily}/day`} />
              <SummaryRow emoji="🏃" label="Steps" value={`${goals.stepsDaily} steps/day`} />
              <SummaryRow emoji="💧" label="Water" value={`${goals.waterDaily}L/day`} />
            </View>
          )}
        </Animated.View>

        {/* Navigation buttons */}
        <View style={styles.navRow}>
          {!isFirst && (
            <TouchableOpacity style={styles.backButton} onPress={handleBack}>
              <SerifText style={styles.backText}>← Back</SerifText>
            </TouchableOpacity>
          )}

          <TouchableOpacity
            style={[styles.nextButton, !canProceed() && styles.nextButtonDisabled]}
            onPress={handleNext}
            disabled={!canProceed()}
          >
            <SerifText style={styles.nextText}>
              {isLast ? "Let's go! 🚀" : 'Next →'}
            </SerifText>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

// ─── Summary Row ──────────────────────────────────────────────────────────────
const SummaryRow = ({ emoji, label, value }: { emoji: string; label: string; value: string }) => (
  <View style={styles.summaryRow}>
    <SerifText style={styles.summaryEmoji}>{emoji}</SerifText>
    <View>
      <SerifText style={styles.summaryLabel}>{label}</SerifText>
      <SerifText style={styles.summaryValue}>{value}</SerifText>
    </View>
  </View>
)

export default Onboarding

// ─── Styles ───────────────────────────────────────────────────────────────────
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF6F0',
  },
  blob: {
    position: 'absolute',
    borderRadius: 999,
    opacity: 0.35,
  },
  blobTop: {
    width: 300,
    height: 300,
    backgroundColor: '#F6BFBF',
    top: -80,
    right: -60,
  },
  blobBottom: {
    width: 250,
    height: 250,
    backgroundColor: '#FFE69E',
    bottom: -60,
    left: -40,
  },
  scroll: {
    flexGrow: 1,
    paddingHorizontal: 28,
    paddingTop: 80,
    paddingBottom: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dotsRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 40,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#E0D0C4',
  },
  dotActive: {
    width: 24,
    backgroundColor: '#F6BFBF',
  },
  card: {
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.75)',
    borderRadius: 28,
    padding: 32,
    alignItems: 'center',
    shadowColor: '#C4A99A',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 5,
    marginBottom: 32,
  },
  emoji: {
    fontSize: 64,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    color: '#3D2C2C',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 15,
    textAlign: 'center',
    color: '#8A7A74',
    lineHeight: 22,
    marginBottom: 28,
  },
  inputWrapper: {
    alignItems: 'center',
    width: '100%',
    gap: 6,
  },
  unitLabel: {
    fontSize: 18,
    color: '#8A94A6',
  },
  input: {
    fontSize: 48,
    fontFamily: 'DMSerifDisplay-Regular',
    color: '#3D2C2C',
    textAlign: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#F6BFBF',
    paddingVertical: 8,
    width: '60%',
  },
  inputSubLabel: {
    fontSize: 13,
    color: '#B0A09A',
    marginTop: 4,
  },
  summaryBox: {
    width: '100%',
    gap: 16,
    marginTop: 4,
  },
  summaryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    backgroundColor: '#FDF6F0',
    borderRadius: 16,
    padding: 16,
  },
  summaryEmoji: {
    fontSize: 32,
  },
  summaryLabel: {
    fontSize: 13,
    color: '#8A94A6',
  },
  summaryValue: {
    fontSize: 18,
    color: '#3D2C2C',
  },
  navRow: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  backButton: {
    paddingVertical: 14,
    paddingHorizontal: 20,
  },
  backText: {
    fontSize: 16,
    color: '#8A7A74',
  },
  nextButton: {
    flex: 1,
    backgroundColor: '#F6BFBF',
    borderRadius: 18,
    paddingVertical: 16,
    alignItems: 'center',
    shadowColor: '#F6BFBF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 4,
  },
  nextButtonDisabled: {
    backgroundColor: '#E8DDD8',
    shadowOpacity: 0,
  },
  nextText: {
    fontSize: 17,
    color: '#3D2C2C',
  },
})