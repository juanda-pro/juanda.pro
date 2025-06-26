<script setup>
import { ref } from 'vue';
import { ChevronRightIcon, DocumentTextIcon } from '@heroicons/vue/24/solid';

defineProps({
  nodes: Array,
  activeFileId: String,
});

const emit = defineEmits(['select-file']);

const openFolders = ref([]);

function toggleFolder(folderName) {
  const index = openFolders.value.indexOf(folderName);
  if (index > -1) {
    openFolders.value.splice(index, 1);
  } else {
    openFolders.value.push(folderName);
  }
}

function isFolderOpen(folderName) {
  return openFolders.value.includes(folderName);
}

function selectFile(file) {
  emit('select-file', file.id);
}
</script>

<template>
  <nav class="space-y-1">
    <div v-for="node in nodes" :key="node.name">
      <!-- Folder -->
      <div v-if="node.type === 'folder'">
        <button @click="toggleFolder(node.name)" class="w-full flex items-center justify-between py-2 px-3 rounded-lg text-left text-sm font-medium transition-colors duration-150 hover:bg-surface-light dark:hover:bg-surface-dark text-secondary-light dark:text-secondary-dark">
          <span class="flex items-center truncate">
            <ChevronRightIcon :class="['w-4 h-4 mr-2 transition-transform flex-shrink-0', { 'rotate-90': isFolderOpen(node.name) }]" />
            <span class="truncate">{{ node.name }}</span>
          </span>
        </button>
        <div v-if="isFolderOpen(node.name)" class="pl-4 mt-1 space-y-1 border-l border-border-light dark:border-border-dark ml-3">
          <div v-for="child in node.children" :key="child.name">
            <a href="#" @click.prevent="selectFile(child)" 
              :class="['flex items-center py-2 px-3 rounded-lg text-sm transition-colors duration-150 truncate', 
                       activeFileId === child.id 
                         ? 'bg-slate-800 text-white dark:bg-slate-200 dark:text-slate-900 font-medium' 
                         : 'hover:bg-surface-light dark:hover:bg-surface-dark text-secondary-light dark:text-secondary-dark']">
              <DocumentTextIcon class="w-4 h-4 mr-2 flex-shrink-0" />
              <span class="truncate">{{ child.name }}</span>
            </a>
          </div>
        </div>
      </div>

      <!-- File -->
      <div v-if="node.type === 'file'">
        <a href="#" @click.prevent="selectFile(node)" 
           :class="['flex items-center py-2 px-3 rounded-lg text-sm transition-colors duration-150 truncate', 
                    activeFileId === node.id 
                      ? 'bg-slate-800 text-white dark:bg-slate-200 dark:text-slate-900 font-medium' 
                      : 'hover:bg-surface-light dark:hover:bg-surface-dark text-secondary-light dark:text-secondary-dark']">
          <DocumentTextIcon class="w-4 h-4 mr-2 flex-shrink-0" />
          <span class="truncate">{{ node.name }}</span>
        </a>
      </div>
    </div>
  </nav>
</template>
