import { R } from "../function/R";
import { map } from "../function/each";

// 효과 및 애니메이션 메서드
const _hide: IEffectHide =
  (node) => (speed) => (erasing) => (f) => (height) => {
    node.style.overflow = "hidden";
    node.animate(
      {
        height: [height + "px", "0"],
      },
      {
        duration: speed,
        easing: erasing as string,
        iterations: 1,
        fill: "forwards",
      }
    );
    if (f !== undefined) f();
    setTimeout(() => {
      node.style.display = "none";
    }, speed);
  };

export const hide: IEffect = (RNodes) => (speed) => (erasing) => (f) => {
  return R.of(RNodes).chain((nodes: HTMLElement[]) =>
    map((node: HTMLElement) => {
      _hide(node)(speed)(erasing)(f)(node.offsetHeight);
    }, R.of(nodes))
  );
};

const _show: IEffectChild = (node) => (speed) => (erasing) => (f) => {
  node.style.height = "0";
  node.style.display = "flex";
  node.style.overflow = "hidden";
  node.animate(
    {
      height: ["0", node.scrollHeight + "px"],
    },
    {
      duration: speed,
      easing: erasing as string,
      iterations: 1,
      fill: "forwards",
    }
  );
  if (f !== undefined) f();
};

export const show: IEffect = (RNodes) => (speed) => (erasing) => (f) => {
  return R.of(RNodes).chain((nodes: HTMLElement[]) => {
    map((node: HTMLElement) => {
      _show(node)(speed)(erasing)(f);
    }, R.of(nodes));
  });
};

export const toggle: IEffect = (RNodes) => (speed) => (erasing) => (f) => {
  return R.of(RNodes).chain((nodes: HTMLElement[]) => {
    map((node: HTMLElement) => {
      node.style.display === "none"
        ? _show(node)(speed)(erasing)(f)
        : _hide(node)(speed)(erasing)(f)(node.offsetHeight);
    }, R.of(nodes));
  });
};

export const slideUp: IEffect = hide;
export const slideDown: IEffect = show;
export const slideToggle: IEffect = toggle;

const _fadeOut: IEffectChild = (node) => (speed) => (erasing) => (f) => {
  node.animate(
    {
      opacity: [1, 0],
    },
    {
      duration: speed,
      easing: erasing as string,
      iterations: 1,
      fill: "forwards",
    }
  );
  if (f !== undefined) f();
  node.style.opacity = "0";
};

export const fadeOut: IEffect = (RNodes) => (speed) => (erasing) => (f) => {
  return R.of(RNodes).chain((nodes: HTMLElement[]) =>
    map((node: HTMLElement) => {
      _fadeOut(node)(speed)(erasing)(f);
    }, R.of(nodes))
  );
};

const _fadeIn: IEffectChild = (node) => (speed) => (erasing) => (f) => {
  node.animate(
    {
      opacity: [0, 1],
    },
    {
      duration: speed,
      easing: erasing as string,
      iterations: 1,
      fill: "forwards",
    }
  );
  if (f !== undefined) f();
  node.style.opacity = "1";
};

export const fadeIn: IEffect = (RNodes) => (speed) => (erasing) => (f) => {
  return R.of(RNodes).chain((nodes: HTMLElement[]) =>
    map((node: HTMLElement) => {
      _fadeIn(node)(speed)(erasing)(f);
    }, R.of(nodes))
  );
};

export const fadeToggle: IEffect = (RNodes) => (speed) => (erasing) => (f) => {
  return R.of(RNodes).chain((nodes: HTMLElement[]) => {
    map((node: HTMLElement) => {
      node.style.opacity === "1"
        ? _fadeOut(node)(speed)(erasing)(f)
        : _fadeIn(node)(speed)(erasing)(f);
    }, R.of(nodes));
  });
};
