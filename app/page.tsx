
export default function Home() {
  return (
    <div className="m-auto">
      <div className="text-center space-y-6 p-32 bg-[#dadbf1]">
        <h1 className="text-6xl font-bold">How can we help?</h1>
        <div className="relative">
          <div className="absolute inset-y-0 end-[32rem] flex items-center pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="rgba(0, 0, 0, 1);transform: ;msFilter:;">
              <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>
            </svg>
          </div>
          <input type="text" name="Search" id="Search" placeholder="Search" className="block w-2/5 p-4  text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 m-auto" />
        </div>
      </div>
      <div className="flex p-32 space-x-24 text-justify">
        <div className="flex flex-col space-y-10">
          <div className="flex space-x-10 items-center">
            <img src="https://help.abstract.com/hc/theming_assets/01HZH4D4GACXWCRKK6JHQ730XD" alt="Icono" className="w-24 h-24 max-h-[120px]" />
            <div className="text-2xl space-y-4">
              <h1 className="font-bold">Using Abstract</h1>
              <p>Abstract lets you manage, version, and document your designs in one place.</p>
              <div className="text-[#5466d7]">
                <a href="#" className="flex items-center hover:underline">
                  <span>Learn more</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z" stroke="#5466d7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="flex space-x-10 items-center">
            <img src="https://help.abstract.com/hc/theming_assets/01HZH4D3M8CRR0C2V5GREVR6HK" alt="Icono" className="w-24 h-24 max-h-[120px]" />
            <div className="text-2xl space-y-4">
              <h1 className="font-bold">Manage organizations, teams, and projects</h1>
              <p>Use Abstract organizations, teams, and projects to organize your people and your work.</p>
              <div className="text-[#5466d7]">
                <a href="#" className="flex items-center hover:underline">
                  <span>Learn more</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z" stroke="#5466d7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="flex space-x-10 items-center">
            <img src="https://help.abstract.com/hc/theming_assets/01HZH4D3S3QY5190TZE3H8ZSVK" alt="Icono" className="w-24 h-24 max-h-[120px]" />
            <div className="text-2xl space-y-4">
              <h1 className="font-bold">Authenticate to Abstract</h1>
              <p>Set up and configure SSO, SCIM, and Just-in-Time provisioning.</p>
              <div className="text-[#5466d7]">
                <a href="#" className="flex items-center hover:underline">
                  <span>Learn more</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z" stroke="#5466d7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-10">
          <div className="flex space-x-10 items-center">
            <img src="https://help.abstract.com/hc/theming_assets/01HZH4D45NKFCN3388ZCBJB878" alt="Icono" className="w-24 h-24 max-h-[120px]" />
            <div className="text-2xl space-y-4">
              <h1 className="font-bold">Manage your account</h1>
              <p>Configure your account settings, such as your email, profile details, and password.</p>
              <div className="text-[#5466d7]">
                <a href="#" className="flex items-center hover:underline">
                  <span>Learn more</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z" stroke="#5466d7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="flex space-x-10 items-center">
            <img src="https://help.abstract.com/hc/theming_assets/01HZH4D38K1S1M9WKWSQZE62YE" alt="Icono" className="w-24 h-24 max-h-[120px]" />
            <div className="text-2xl space-y-4">
              <h1 className="font-bold">Manage billing</h1>
              <p>Change subscriptions and payment details.</p>
              <div className="text-[#5466d7]">
                <a href="#" className="flex items-center hover:underline">
                  <span>Learn more</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z" stroke="#5466d7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="flex space-x-10 items-center">
            <img src="https://help.abstract.com/hc/theming_assets/01HZH4D3G4S2K93BN3WJPT8600" alt="Icono" className="w-24 h-24 max-h-[120px]" />
            <div className="text-2xl space-y-4">
              <h1 className="font-bold">Abstract support</h1>
              <p>Get in touch with a human.</p>
              <div className="text-[#5466d7]">
                <a href="#" className="flex items-center hover:underline">
                  <span>Learn more</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z" stroke="#5466d7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
