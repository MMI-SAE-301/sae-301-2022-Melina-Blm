<script setup lang="ts">

import { colors } from '@/types'


defineProps<{
    name?: string;
    label?: string;
}>();


</script>
<template>

    <FormKit :name="name" :label="label" value="#FFFFFF" type="radio" :options="colors" :sections-schema="{
        inner: { $el: null },
        decorator: { $el: null },
    }" input-class="peer sr-only" options-class="flex gap-4 my-3">
        <template #label="context">
            <div class="h-9 w-9 rounded-full border-4 peer-checked:border-blue-500"
                :style="{ backgroundColor: context.option.value }">
            </div>
            <span class="sr-only">{{ context.option.label }}</span>
        </template>
    </FormKit>

</template>