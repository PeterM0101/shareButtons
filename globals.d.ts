export {}; // Required to make this file a module, preventing scope pollution

declare global {
    interface Window {
        _mtm: any;
    }
}