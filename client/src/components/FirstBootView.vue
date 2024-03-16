<template>
<div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start pt-8">
  <div className="w-full max-w-4xl px-4 md:px-8 lg:px-12">
    <h1 class="text-3xl font-bold">Welcome to magazine!</h1>
    <p>It's the first time you open the app. Let's configure it</p>
    <br>
    <form @submit.prevent="onSubmit">

      <div
        v-if="currentStep === 1"
      >
      <h2>First step</h2>
      <p>Create the main user - main user is responsible for maintaing the magazine</p>

        <FormField v-slot="{ componentField }" name="username">
          <FormItem v-auto-animate>
            <FormLabel>Username</FormLabel>
            <FormControl>
              <Input type="text" placeholder="holy_unicorn_11" v-bind="componentField" />
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
              <Input type="password" placeholder="password1" v-bind="componentField" />
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
              <Input type="password" placeholder="password1" v-bind="componentField" />
            </FormControl>
            <FormDescription>
              This is your public display name.
            </FormDescription>
            <FormMessage />
          </FormItem>
        </FormField>

        <Button @click="toStep2">
          SAVE AND PROCEED TO NEXT STEP
        </Button>

      </div>

      <div
        v-if="currentStep === 2"
      >
      <h2>Second step</h2>
      <p>Create a guest user - this user will only be able to browse the data</p>

        <FormField v-slot="{ componentField }" name="username">
          <FormItem v-auto-animate>
            <FormLabel>Username</FormLabel>
            <FormControl>
              <Input type="text" placeholder="holy_unicorn_11" v-bind="componentField" />
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
              <Input type="password" placeholder="password1" v-bind="componentField" />
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
              <Input type="password" placeholder="password1" v-bind="componentField" />
            </FormControl>
            <FormDescription>
              This is your public display name.
            </FormDescription>
            <FormMessage />
          </FormItem>
        </FormField>
      </div>

      <div
        v-if="currentStep === 3"
      >
        <Button type="submit">
          Submit
        </Button>

      </div>

    </form>

    <!-- <Button @click="toStep1">
        1
    </Button>

    <Button @click="toStep2">
        2
    </Button>

    <Button @click="toStep3">
        3
    </Button> -->
</div>
</div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import { Button } from '@/components/ui/button'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'



const currentStep = ref(1)

function toStep1() { currentStep.value = 1 }
function toStep2() { currentStep.value = 2 }
function toStep3() { currentStep.value = 3 }

function onSubmit() {

}

</script>
