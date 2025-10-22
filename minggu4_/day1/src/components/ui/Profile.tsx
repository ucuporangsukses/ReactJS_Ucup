import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'; // sesuaikan path kalau beda
import { Button } from '@/components/ui/button'; // sesuaikan path kalau beda
import { Input } from '@/components/ui/input'; // sesuaikan path kalau beda

export const Profile: React.FC = () => (
  <div className="max-w-md mx-auto mt-10">
    <Card>
      <CardHeader>
        <CardTitle>Profil Gue</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input placeholder="Nama" />
        <Input placeholder="Email" />
      </CardContent>
      <CardFooter>
        <Button>Update Profil</Button>
      </CardFooter>
    </Card>
  </div>
);
