// src/components/MultiStepForm.tsx
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from './ui/button'
import { Input } from './ui/input'

interface FormData {
  firstName: string
  lastName: string
  email: string
  company: string
  position: string
  bio: string
  website?: string
}

export default function MultiStepForm() {
  const [step, setStep] = useState(1)
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors }
  } = useForm<FormData>()

  const nextStep = async () => {const valid = await trigger(getFields(step) as any)

    
    if (valid) setStep(step + 1)
  }

  const prevStep = () => setStep(step - 1)

  const getFields = (step: number) => {
    if (step === 1) return ['firstName', 'lastName', 'email']
    if (step === 2) return ['company', 'position']
    return ['bio']
  }

  const onSubmit = (data: FormData) => {
    console.log('FORM FINAL:', data)
    alert('Form submitted, cek console ya bre!')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-md mx-auto">
      <h2 className="text-xl font-semibold text-center">Step {step} of 3</h2>

      {/* STEP 1 */}
      {step === 1 && (
        <div className="space-y-3">
          <Input {...register('firstName', { required: 'First Name required' })} placeholder="First Name" />
          {errors.firstName && <p className="text-red-600">{errors.firstName.message}</p>}

          <Input {...register('lastName', { required: 'Last Name required' })} placeholder="Last Name" />
          {errors.lastName && <p className="text-red-600">{errors.lastName.message}</p>}

          <Input
            {...register('email', { required: 'Email required', pattern: /^\S+@\S+$/i })}
            placeholder="Email"
          />
          {errors.email && <p className="text-red-600">{errors.email.message || 'Invalid email'}</p>}
        </div>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <div className="space-y-3">
          <Input {...register('company', { required: 'Company required' })} placeholder="Company" />
          {errors.company && <p className="text-red-600">{errors.company.message}</p>}

          <Input {...register('position', { required: 'Position required' })} placeholder="Position" />
          {errors.position && <p className="text-red-600">{errors.position.message}</p>}
        </div>
      )}

      {/* STEP 3 */}
      {step === 3 && (
        <div className="space-y-3">
          <textarea
            {...register('bio', { required: 'Bio required' })}
            placeholder="Your Bio"
            className="w-full border rounded-md p-2"
          />
          {errors.bio && <p className="text-red-600">{errors.bio.message}</p>}

          <Input {...register('website')} placeholder="Website (optional)" />
        </div>
      )}

      {/* BUTTONS */}
      <div className="flex justify-between">
        {step > 1 && (
          <Button type="button" variant="outline" onClick={prevStep}>
            Previous
          </Button>
        )}

        {step < 3 ? (
          <Button type="button" onClick={nextStep}>
            Next
          </Button>
        ) : (
          <Button type="submit">
            Submit
          </Button>
        )}
      </div>
    </form>
  )
}
