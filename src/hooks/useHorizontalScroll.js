import React, { useState, useEffect, useRef } from "react";
import Scrollbar, { ScrollbarPlugin } from "smooth-scrollbar";

const useHorizontalScrollbal = (renderLayer, options) => {
  const [scrollbarApi, setScrollbarApi] = useState(null);
  const containerRef = useRef(null);

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

  useEffect(() => {
    if (containerRef.current) {
      setScrollbarApi(
        Scrollbar.init(containerRef.current, {
          plugins: {
            invertDelta: {
              events: [/wheel/]
            }
          },
          ...options
        })
      );
    }
  }, [containerRef, options]);

  return <div ref={ containerRef }>{ renderLayer(scrollbarApi) }</div>;
};

export default useHorizontalScrollbal;
