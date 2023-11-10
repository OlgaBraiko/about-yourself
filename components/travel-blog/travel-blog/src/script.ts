const storageKey: string = "snow";
const snow: HTMLElement | null = document.querySelector(".snow");
const snowflakes: NodeListOf<HTMLElement> =
  document.querySelectorAll(".snow__flake");
const snowToggle: HTMLElement | null = document.querySelector(".snow-toggle");

function getRndInteger(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRndFloat(min: number, max: number): string {
  return (Math.random() * (max - min) + min).toFixed(1);
}

snowflakes.forEach((snowflake: HTMLElement) => {
  snowflake.style.fontSize = getRndFloat(0.7, 1.5) + "em";
  snowflake.style.animationDuration = getRndInteger(20, 30) + "s";
  snowflake.style.animationDelay =
    getRndInteger(-1, snowflakes.length / 2) + "s";
});

function changeSnowAnimation(animationName: string | null): void {
  if (snow) {
    snow.style.setProperty("--animation-name", animationName);
  }
}

snowToggle?.addEventListener("change", (event: Event) => {
  changeSnowAnimation((event.target as HTMLInputElement).value);
  localStorage.setItem(storageKey, (event.target as HTMLInputElement).value);
});

document.addEventListener("DOMContentLoaded", () => {
  let currentStorage: string = localStorage?.getItem(storageKey) || "";

  if (currentStorage || snowToggle) {
    (
      snowToggle?.querySelector(
        ".snow-toggle__control[value='" + currentStorage + "']"
      ) as HTMLInputElement
    ).checked = true;
  }

  changeSnowAnimation(currentStorage);

  window.addEventListener("storage", () => {
    changeSnowAnimation(localStorage.getItem(storageKey));
  });
});
