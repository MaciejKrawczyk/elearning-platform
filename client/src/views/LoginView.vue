<template>

  <MainContainer>
    <main class="grid grid-cols-2 w-full bg-green-500 h-20">
      <div class="bg-amber-400 w-full sm:w-auto flex justify-center items-center">
        <div>
          <Carousel class="relative w-full max-w-xs" @init-api="setApi">
            <CarouselContent>
              <CarouselItem v-for="(_, index) in 5" :key="index">
                <div class="p-1">
                  <Card>
                    <CardContent class="flex aspect-square items-center justify-center p-6">
                      <span class="text-4xl font-semibold">{{ index + 1 }}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div class="py-2 text-sm text-muted-foreground flex justify-center items-center">
            <div
              v-for="index in 5" :key="index"
              class="w-2 h-2 mx-1 rounded-full"
              :class="{'bg-gray-800': index === current, 'bg-gray-400': index !== current}">
            </div>
          </div>
        </div>
      </div>
      <div class="bg-green-50 w-full flex justify-center items-center">

        <form @submit="onSubmit" class="w-full">
          <FormField v-slot="{ componentField }" name="login">
            <FormItem v-auto-animate>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="text" placeholder="" v-bind="componentField" />
              </FormControl>
              <!--          <FormDescription>-->
              <!--            This is your public display name.-->
              <!--          </FormDescription>-->
              <FormMessage />
            </FormItem>
          </FormField>

          <br>

          <FormField v-slot="{ componentField }" name="password">
            <FormItem v-auto-animate>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="" v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>

          <br>

          <Button type="submit" :disabled="isSubmitting" class="w-full">
            <Loader2 class="w-4 h-4 mr-2 animate-spin" v-if="isSubmitting" />
            Sign in
          </Button>

        </form>
      </div>
    </main>
  </MainContainer>

</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { sleep } from '@/lib/utils'
import { Loader2 } from 'lucide-vue-next'
import * as z from 'zod'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { vAutoAnimate } from '@formkit/auto-animate/vue'
import { useToast } from '@/components/ui/toast/use-toast'
import router from '@/router'
import MainContainer from '@/components/MainContainer.vue'
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import { watchOnce } from '@vueuse/core'
import api from '@/../mock-server/index'


const api1 = ref<CarouselApi>()
const totalCount = ref(0)
const current = ref(0)

function setApi(val: CarouselApi) {
  api1.value = val
}

watchOnce(api1, (api1) => {
  if (!api1)
    return

  totalCount.value = api1.scrollSnapList().length
  current.value = api1.selectedScrollSnap() + 1

  api1.on('select', () => {
    current.value = api1.selectedScrollSnap() + 1
  })
})

const formSchema = toTypedSchema(z.object({
  login: z.string().min(3).max(50),
  password: z.string().min(3),
}))

const { toast } = useToast()
const { handleSubmit, resetForm, isSubmitting } = useForm({
  validationSchema: formSchema
})

const onSubmit = handleSubmit(async (values) => {

  const user = { ...values, role: 'editor' }

  await sleep(500)
  const response = await api.post('/', { json: user })
  console.log(response)
  toast({
    title: 'Success!',
    description: `The Editor user '${response.login}' has been created successfully`
  })
  resetForm()
})

</script>

