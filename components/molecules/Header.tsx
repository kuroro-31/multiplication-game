/*
|--------------------------------------------------------------------------
| ヘッダー
|--------------------------------------------------------------------------
*/
import React from "react";

import Logo from "@/components/atoms/header/logo";

const Header: React.FC = () => {
  return (
    <header>
      <div className="bg-white dark:bg-dark w-full flex-none border-b border-comiee">
        <div className="max-w-8xl mx-auto">
          <div className="py-4 lg:px-8 lg:border-0 mx-4 lg:mx-0">
            <div className="relative flex items-center">
              <a
                href="/"
                className="mr-3 flex-none md:overflow-hidden md:w-auto"
              >
                <span className="sr-only">
                  Comiee - Manga Social Networking Service
                </span>
                <h1 className="text-2xl font-bold dark:text-white">
                  <Logo />
                </h1>
              </a>

              <div className="flex items-center md:ml-auto">
                <div className="hidden lg:flex items-center">
                  <nav className="text-sm">
                    <div className="flex items-center">
                      <div className="flex items-center">
                        <a href="/login" className="btn-primary">
                          ログイン
                        </a>
                        <a
                          href="/register"
                          className="ml-4 hover:text-primary dark:hover:text-f5"
                        >
                          新規登録
                        </a>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
