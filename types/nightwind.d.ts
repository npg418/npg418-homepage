// Issue #74
declare module 'nightwind/helper.js' {
  type NightwindHelperModule = {
    init: () => string;
    beforeTransition: () => void;
    toggle: () => void;
    enable: (dark: boolean) => void;
    checkNightMode: () => boolean;
    watchNightMode: () => void;
    addNightModeSelector: () => void;
    addNightTransitions: () => void;
    initNightwind: () => void;
    toggleNightMode: () => void;
  };

  const nightwindHelper: NightwindHelperModule;

  export default nightwindHelper;
}
