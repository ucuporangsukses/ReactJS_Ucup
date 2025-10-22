import React from 'react';
import { Button } from '@/components/ui/button';
import { Profile } from '@/components/ui/Profile'; // pastiin path sesuai
import { ThemeToggle } from '@/components/ui/ThemeToggle'; // pastiin path sesuai
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export const ShadcnExample: React.FC = () => {
  return (
    <div className="space-y-8 p-6">
      {/* Demo Card Shadcn */}
      <Card className="w-[350px] mx-auto">
        <CardHeader>
          <CardTitle>Selamat Datang di shadcn/ui</CardTitle>
          <CardDescription>
            Membangun UI yang indah tidak pernah semudah ini.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Komponen ini ditambahkan langsung ke proyek Anda, memberikan kontrol penuh
            untuk kustomisasi.
          </p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Info</Button>
          <Button>Mulai</Button>
        </CardFooter>
      </Card>

      {/* Theme Toggle */}
      <div className="flex justify-center">
        <ThemeToggle />
      </div>

      {/* Profile Page */}
      <Profile />
    </div>
  );
};

export default ShadcnExample;
