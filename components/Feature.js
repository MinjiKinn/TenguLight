import Image from "next/image";
import Link from "next/link";

export default function Review() {
  return (




<div className="relative bg-white py-16 sm:py-24 lg:py-32">
<div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
  <h2 className="text-base font-semibold tracking-wider text-red-700 uppercase">当店で扱っている商品の</h2>
  <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
    強力な特徴 TOP3
  </p>
  <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
    今、日本で買える植物用LEDライトの中でも断然一番だと自信持って言えます！
  </p>
  <div className="mt-12">
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
    
      <div className="pt-6">
        <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
          <div className="-mt-6">
            <div>
              <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r bg-red-700 rounded-md shadow-lg">
                {/* Heroicon name: outline/lock-closed */}
                <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </span>
            </div>
            <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">20台まで接続</h3>
            <p className="mt-5 text-base text-gray-500">
              光量調節は簡単だけどそれが20台もあったらさすがに面倒臭い。でも、天狗ライトの商品は連動して使うことが可能なんです！
            </p>
          </div>
        </div>
      </div>
      <div className="pt-6">
        <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
          <div className="-mt-6">
            <div>
              <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r bg-red-700 rounded-md shadow-lg">
                {/* Heroicon name: outline/refresh */}
                <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </span>
            </div>
            <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">最新LEDチップ</h3>
            <p className="mt-5 text-base text-gray-500">
              MARS HYDRO社とSPIDER FARMER社では、今業界で一番信頼されてるSAMSUNG LM301Bをメインに使っております。
            </p>
          </div>
        </div>
      </div>
      <div className="pt-6">
        <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
          <div className="-mt-6">
            <div>
              <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r bg-red-700 rounded-md shadow-lg">
                {/* Heroicon name: outline/shield-check */}
                <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </span>
            </div>
            <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">防水・防塵</h3>
            <p className="mt-5 text-base text-gray-500">
              植物用ライトの防水機能って案外と大事！育成環境は湿度が高くなりがち。天狗ライトのラインアップは完全防水のIP65バッチリです。
            </p>
          </div>
        </div>
      </div>
      
      
    </div>
  </div>
</div>
</div>
  )
}