export {};

declare global {
    interface Window {
        // Tell TypeScript that DeviceMotionEvent exists globally
        DeviceMotionEvent: {
            requestPermission: () => Promise<"granted" | "denied">;
        };
    }
}
