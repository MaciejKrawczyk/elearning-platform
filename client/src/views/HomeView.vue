<template>
  <Navbar />

  <MainContainer>

    <h1>Witaj Maciek!</h1>

    <main>

      <h2>Kursy</h2>

      <ContextMenu class="absolute">
        <div class="flex w-full flex-wrap gap-3">

          <ContextMenuTrigger>
            <Card class="w-1/4 min-w-52 cursor-pointer transition-colors hover:bg-gray-100">
              <CardHeader>
                <CardTitle>Algorytmy sterowania dyskretnego [22/23L]</CardTitle>
                <CardDescription>Semestr 6</CardDescription>
              </CardHeader>
              <CardContent>

              </CardContent>
              <CardFooter class="flex">
              </CardFooter>
            </Card>
          </ContextMenuTrigger>


        </div>

        <ContextMenuContent class="w-64">
          <ContextMenuItem inset>
            Back
            <ContextMenuShortcut>⌘[</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem inset disabled>
            Forward
            <ContextMenuShortcut>⌘]</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem inset>
            Reload
            <ContextMenuShortcut>⌘R</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuSub>
            <ContextMenuSubTrigger inset>
              More Tools
            </ContextMenuSubTrigger>
            <ContextMenuSubContent class="w-48">
              <ContextMenuItem>
                Save Page As...
                <ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>Create Shortcut...</ContextMenuItem>
              <ContextMenuItem>Name Window...</ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem>Developer Tools</ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSeparator />
          <ContextMenuCheckboxItem checked>
            Show Bookmarks Bar
            <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
          <ContextMenuSeparator />
          <ContextMenuRadioGroup model-value="pedro">
            <ContextMenuLabel inset>
              People
            </ContextMenuLabel>
            <ContextMenuSeparator />
            <ContextMenuRadioItem value="pedro">
              Pedro Duarte
            </ContextMenuRadioItem>
            <ContextMenuRadioItem value="colm">
              Colm Tuite
            </ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuContent>

      </ContextMenu>

    </main>

  </MainContainer>


</template>


<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import MainContainer from '@/components/MainContainer.vue'
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Card } from '@/components/ui/card'
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from '@/components/ui/context-menu'

const notifications = [
  {
    title: 'Your call has been confirmed.',
    description: '1 hour ago'
  },
  {
    title: 'You have a new message!',
    description: '1 hour ago'
  },
  {
    title: 'Your subscription is expiring soon!',
    description: '2 hours ago'
  }
]
</script>