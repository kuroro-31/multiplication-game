/*
|--------------------------------------------------------------------------
| ログインページ
|--------------------------------------------------------------------------
*/
import Logo from "@/components/pages/login/logo";

export default function Login() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="sendFormBox w-full max-w-[450px] mx-4 md:mx-auto bg-white dark:bg-dark rounded border dark:lg:border-2 border-b-l-c dark:border-dark dark:lg:border-dark-1  overflow-hidden">
        <div
          id="overlay"
          className="fixed inset-0 bg-white z-[999] dark:bg-dark opacity-50 hidden"
        ></div>
        <div className="progress" style={{ display: "none" }}>
          <div className="color"></div>
        </div>

        <div className="flex justify-center mt-12 px-10">
          <a href="/" className="flex-none md:overflow-hidden md:w-auto">
            <span className="sr-only">
              Comiee - Manga Social Networking Service
            </span>
            <h1 className="text-2xl font-bold dark:text-white">
              <Logo />
            </h1>
          </a>
        </div>

        <h2 className="text-2xl flex justify-center mt-4 px-10 dark:text-f5">
          ログイン
        </h2>
        <p className="flex justify-center text-base mt-2">
          お客様のメールアドレスを使用
        </p>
        <form
          id="sendForm"
          method="POST"
          action="/login"
          className="px-6 lg:px-10 dark:bg-dark pt-6"
        >
          {/* Add your CSRF token and other necessary hidden inputs here */}

          {/* Email input */}
          <div className="relative mb-4">
            <input
              id="email"
              type="text"
              name="email"
              className="input-field w-full p-4 border-transparent rounded bg-white dark:bg-dark-1 focus:border-[3px] focus:border-primary transition-all"
              required
            />
            <label
              htmlFor="email"
              className="label absolute top-[5px] left-[10px] text-gray-500 transition-all duration-200 dark:text-f5"
            >
              メールアドレス
            </label>
            <div className="border-wrapper absolute top-0 left-0 w-full h-full border border-b-l-c dark:border-none rounded pointer-events-none"></div>
          </div>

          {/* Password input */}
          <div className="relative mb-6">
            <input
              id="password"
              type="password"
              name="password"
              className="input-field w-full p-4 border-transparent rounded bg-white dark:bg-dark-1 focus:border-[3px] focus:border-primary transition-all"
              required
            />
            <label
              htmlFor="password"
              className="label absolute top-[5px] left-[10px] text-gray-500 transition-all duration-200 dark:text-f5"
            >
              パスワード
            </label>
            <div className="border-wrapper absolute top-0 left-0 w-full h-full border border-b-l-c dark:border-none rounded pointer-events-none"></div>
          </div>

          <input type="hidden" name="remember" value="on" />
          <div className="w-full flex justify-between items-center pb-6 mb-6 border-b border-b-l-c dark:border-dark-1">
            <a
              href="/password/request"
              className="cursor-pointer text-primary dark:text-gray dark:hover:text-ddd"
            >
              パスワードを忘れた場合
            </a>
            <span className="relative">
              <button
                type="submit"
                className="btn-primary py-1.5 px-6 lg:px-8 ml-auto"
              >
                次へ
              </button>
            </span>
          </div>
        </form>
        <div className="w-full mb-8 lg:mb-12 flex justify-center">
          <a href="/register" className="cursor-pointer dark:hover:text-ddd">
            または新規登録
          </a>
        </div>
      </div>
    </div>
  );
}
