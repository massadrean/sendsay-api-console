import React, { useState, useCallback } from "react";
import Scrollbar, { ScrollbarPlugin } from "smooth-scrollbar";

const useHorizontalScrollbal = (renderLayer, options) => {
  const [scrollbarApi, setScrollbarApi] = useState(null);
  const containerRef = useCallback(
    node => {
      if (node !== null) {
        setScrollbarApi(
          Scrollbar.init(node, {
            plugins: {
              invertDelta: {
                events: [/wheel/]
              }
            },
            ...options
          })
        );
      }
    },
    [options]
  );

  class InvertDeltaPlugin extends ScrollbarPlugin {
    static pluginName = "invertDelta";

    static defaultOptions = {
      events: []
    };

    transformDelta(delta, fromEvent) {
      if (this.shouldInvertDelta(fromEvent)) {
        return {
          x: delta.y,
          y: delta.x
        };
      }

      return delta;
    }

    shouldInvertDelta(fromEvent) {
      return this.options.events.some(rule => fromEvent.type.match(rule));
    }
  }

  Scrollbar.use(InvertDeltaPlugin);

  return <div ref={ containerRef }>{ renderLayer(scrollbarApi) }</div>;
};

export default useHorizontalScrollbal;
