<template>
  <header class="absolute top-0 z-40 w-full px-6 py-4 shadow-lg md:px-8 backdrop-blur-xl">
    <nav class="container flex items-center justify-between h-auto mx-auto">
      <div class="w-48">
        <Icon name="MainLogo" width="258.808" height="54.308" class="w-full h-full fill-current" />
      </div>
      <div class="flex flex-row items-center justify-end gap-4">
        <LangSelectorComponent />
        <DarkModeSwitch />
      </div>
    </nav>
  </header>
</template>
