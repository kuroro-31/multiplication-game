import { useCallback, useEffect } from "react";

const useCommon = () => {
  useEffect(() => {
    const countSelectors = [
      [".count_2", ".string_count_2"],
      [".count_6", ".string_count_6"],
      [".count_7", ".string_count_7"],
      [".count_11", ".string_count_11"],
      [".count_12", ".string_count_12"],
      [".count_13", ".string_count_13"],
      [".count_14", ".string_count_14"],
      [".count_15", ".string_count_15"],
      [".count_16", ".string_count_16"],
    ];

    countSelectors.forEach(([countSelector, stringCountSelector]) => {
      const countElement = document.querySelector(countSelector);
      const stringCountElement = document.querySelector(stringCountSelector);

      if (countElement && stringCountElement) {
        countElement.addEventListener("keyup", () => {
          const input = (countElement as HTMLInputElement).value;
          if (input !== null) {
            (stringCountElement as HTMLElement).textContent =
              input.length.toString();
          }
        });
      }
    });
  }, []);

  const submit_btn = useCallback((): void => {
    const submitButtons = document.querySelectorAll(
      ".submit_btn, .submit_btn2, .submit_btn3"
    );
    submitButtons.forEach((button) => button.classList.add("activeLoading"));
  }, []);

  useEffect(() => {
    const sendForm = document.getElementById("sendForm") as HTMLElement | null;
    const progress = document.querySelector(".progress") as HTMLElement | null;
    const overlay = document.getElementById("overlay") as HTMLElement | null;

    if (!sendForm || !progress || !overlay) {
      return;
    }

    const handleSubmit = () => {
      progress.style.display = "block";
      overlay.classList.remove("hidden");

      submit_btn();
    };

    sendForm.addEventListener("submit", handleSubmit);

    return () => {
      sendForm.removeEventListener("submit", handleSubmit);
    };
  }, [submit_btn]);

  useEffect(() => {
    const stripe_connectbtn = document.querySelector(".stripe_connectbtn");
    if (stripe_connectbtn) {
      stripe_connectbtn.classList.add("activeLoading");
      window.setTimeout(function () {
        stripe_connectbtn.classList.remove("activeLoading");
      }, 5000);
    }
  }, []);

  useEffect(() => {
    const inputs = document.querySelectorAll("#sendForm .input-field");

    inputs.forEach((inputElement) => {
      const input = inputElement as HTMLInputElement;

      const addLabelClass = () => {
        const label = input.nextElementSibling as HTMLElement;
        label.classList.add("label-focused");
      };

      const removeLabelClass = () => {
        const label = input.nextElementSibling as HTMLElement;
        label.classList.remove("label-focused");
      };

      /*
      |--------------------------------------------------------------------------
      | 文字数カウント
      |--------------------------------------------------------------------------
      |
      |
      */
      const updateLabel = () => {
        if (input.value !== null && input.value !== "") {
          addLabelClass();
        } else {
          removeLabelClass();
        }
      };

      input.addEventListener("input", updateLabel);
      input.addEventListener("focus", updateLabel);
      input.addEventListener("blur", updateLabel);

      if (input.value) {
        updateLabel();
      }

      return () => {
        input.removeEventListener("input", updateLabel);
        input.removeEventListener("focus", updateLabel);
        input.removeEventListener("blur", updateLabel);
      };
    });
  }, []);

  return {
    submit_btn,
  };
};

export default useCommon;
