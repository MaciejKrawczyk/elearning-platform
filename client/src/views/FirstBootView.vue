<template>
  <div class="min-h-screen bg-gray-100 flex flex-col items-center justify-start pt-8">
    <div class="w-full max-w-4xl px-4 md:px-8 lg:px-12">
      <h1 class="text-3xl font-bold">Welcome to magazine!</h1>
      <p>It's the first time you open the app. Let's configure it</p>

      <transition name="slide" mode="out-in" @after-leave="() => { isStep2Visible = true }">
        <div
          v-if="currentStep === 1"
          key="step1"
        >
          <form @submit="onSubmitStep1">
            <h2>First step</h2>
            <p>Create the main user - main user is responsible for maintaing the magazine</p>

            <FormField v-slot="{ componentField }" name="login">
              <FormItem v-auto-animate>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="login" v-bind="componentField" />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            </FormField>

            <br>

            <FormField v-slot="{ componentField }" name="password">
              <FormItem v-auto-animate>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="password" v-bind="componentField" />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            </FormField>

            <br>

            <FormField v-slot="{ componentField }" name="password2">
              <FormItem v-auto-animate>
                <FormLabel>Repeat password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="password" v-bind="componentField" />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            </FormField>

            <br>

            <Button type="submit" :disabled="isSubmitting">
              <Loader2 class="w-4 h-4 mr-2 animate-spin" v-if="isSubmitting" />
              SAVE AND PROCEED TO NEXT STEP
            </Button>
          </form>
        </div>
      </transition>

      <transition name="slide" mode="out-in" @after-leave="() => { isStep3Visible = true }">
        <div
          v-if="currentStep === 2 && isStep2Visible"
          key="step2"
        >
          <form @submit.prevent="onSubmitStep2">
            <h2>Second step</h2>
            <p>Create a guest user - this user will only be able to browse the data</p>

            <FormField v-slot="{ componentField }" name="login">
              <FormItem v-auto-animate>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="login" v-bind="componentField" />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            </FormField>

            <br>

            <FormField v-slot="{ componentField }" name="password">
              <FormItem v-auto-animate>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="password" v-bind="componentField" />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            </FormField>

            <br>

            <FormField v-slot="{ componentField }" name="password2">
              <FormItem v-auto-animate>
                <FormLabel>Repeat password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="password" v-bind="componentField" />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            </FormField>

            <br>

            <Button type="submit" :disabled="isSubmitting">
              <Loader2 class="w-4 h-4 mr-2 animate-spin" v-if="isSubmitting" />
              SAVE AND PROCEED TO LAST STEP
            </Button>
          </form>
        </div>
      </transition>

      <transition name="slide" mode="out-in">
        <div
          v-if="currentStep === 3 && isStep3Visible"
          key="step3"
        >
          <h2>Everything is ready!</h2>
          <p>Do you want to be logged in as main user right now?</p>
          <br>

          <div class="w-6/12 justify-between flex">
            <Button @click.prevent="enterAsMainUser">
              Enter as main user
            </Button>
            <Button variant="outline" @click.prevent="enterAsGuestUser">
              Use guest user instead
            </Button>
          </div>

        </div>
      </transition>


    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { sleep } from '@/lib/utils'
import ky from 'ky'
import { Loader2 } from 'lucide-vue-next'
import * as z from 'zod'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { vAutoAnimate } from '@formkit/auto-animate/vue'
import { useToast } from '@/components/ui/toast/use-toast'
import router from '@/router'

const formSchema = toTypedSchema(z.object({
  login: z.string().min(3).max(50),
  password: z.string().min(3),
  password2: z.string().min(3)
})
.refine((data) => data.password === data.password2, {
  message: 'Passwords don\'t match',
  path: ['password2']
}))

const { toast } = useToast()
const { handleSubmit, resetForm, isSubmitting } = useForm({
  validationSchema: formSchema
})

const currentStep = ref(1)
const isStep2Visible = ref(false)
const isStep3Visible = ref(false)

function toStep2() {
  currentStep.value = 2
}

function toStep3() {
  currentStep.value = 3
}

const onSubmitStep1 = handleSubmit(async (values) => {

  const user = { ...values, role: 'editor' }

  await sleep(500)
  const response = await ky.post('http://localhost:3000/user', { json: user }).json()
  console.log(response)
  toast({
    title: 'Success!',
    description: `The Editor user '${response.login}' has been created successfully`
  })
  toStep2()
  resetForm()
})

const onSubmitStep2 = handleSubmit(async (values) => {

  const user = { ...values, role: 'viewer' }

  await sleep(500)
  const response = await ky.post('http://localhost:3000/user', { json: user }).json()
  console.log(response)
  toast({
    title: 'Success!',
    description: `The Viewer user '${response.login}' has been created successfully`
  })
  toStep3()
  resetForm()
})

async function enterAsMainUser() {
  // login logic with step1 credentials...
  await router.push('/setup')
}

async function enterAsGuestUser() {
  // login logic with step2 credentials...
  await router.push('/setup')
}

</script>

<style scoped>

.slide-enter-active, .slide-leave-active {
  transition: transform 0.5s ease;
}

.slide-enter, .slide-leave-to /* .slide-leave-active in <2.1.8 */
{
  transform: translateX(200%);
}
</style>