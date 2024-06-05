import { ref, onMounted, onUnmounted, watch } from "vue";

export const useWindowSize = () => {
    const width = ref(0);
    const isMobile = ref(false);

    const updateWidth = () => {
        width.value = window.innerWidth;
        isMobile.value = width.value < 768;
    };

    onMounted(() => {
        if (typeof window !== 'undefined') {
            width.value = window.innerWidth;
            isMobile.value = width.value < 768;
            window.addEventListener('resize', updateWidth);
        }
    });

    onUnmounted(() => {
        if (typeof window !== 'undefined') {
            window.removeEventListener('resize', updateWidth);
        }
    });

    return { isMobile };
};
