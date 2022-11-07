"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { BuiltInProviderType } from "next-auth/providers";
import {
  ClientSafeProvider,
  getProviders,
  LiteralUnion,
  signIn,
} from "next-auth/react";
import { useEffect, useState } from "react";

const LoginForm = () => {
  const [providers, setProviders] = useState<Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null>();

  useEffect(() => {
    getProviders().then(providers => setProviders(providers));
  }, []);

  if (!providers) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <h2 className="font-semibold uppercase">Se connecter</h2>
      {Object.values(providers).map(provider => (
        <div key={provider.name}>
          <button
            onClick={() => signIn(provider.id)}
            className="py-3 px-6 bg-gray-100 rounded-lg hover:shadow-md active:shadow-lg transition-shadow flex items-center gap-2"
          >
            <span>Continuer avec {provider.name}</span>
            <FontAwesomeIcon
              icon={faAngleRight}
              className="text-indigo-500"
            />
          </button>
        </div>
      ))}
    </div>
  );
};

export default LoginForm;
