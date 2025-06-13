"use client";

import { Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
  };

  return (
    <main className="bg-background flex min-h-screen flex-col items-center justify-center px-4">
      <div className="flex w-full max-w-xl flex-col items-center gap-8">
        <Image
          src="/logo.svg"
          alt="Dr Agenda"
          width={180}
          height={40}
          priority
        />
        <h1 className="text-primary text-center text-4xl font-bold md:text-5xl">
          Organize sua clínica, encante seus pacientes
        </h1>
        <p className="text-muted-foreground text-center text-lg md:text-xl">
          O <span className="text-primary font-semibold">Dr Agenda</span> é o
          sistema completo para clínicas modernas: agendamento online, gestão de
          pacientes, relatórios e muito mais. Simples, rápido e seguro.
        </p>
        <Button
          asChild
          size="lg"
          className="mt-2 w-full max-w-xs text-lg"
          disabled={isLoading}
        >
          <Link href="/dashboard" onClick={handleClick}>
            {isLoading ? (
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            ) : null}
            Acessar
          </Link>
        </Button>
      </div>
    </main>
  );
}
