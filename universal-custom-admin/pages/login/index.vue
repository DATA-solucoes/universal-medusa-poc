<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "~/components/ui/toast";

definePageMeta({
  middleware: ["check-auth"],
});

const client = useMedusaClient();
const formValue = ref<{ email: string; password: string }>({ email: "", password: "" });

const count = ref(0);

const lockButtonLogin = ref<boolean>(false);

const userStore = useUserStore();
const { setUserStore } = userStore;
const { user } = storeToRefs(userStore);

/* {
              toast({
                title: 'Testing',
                description: 'This is my toast',
                duration: 2000,
              });
            } */

async function handleSubmitLogin() {
  lockButtonLogin.value = true;
  console.log(formValue.value);

  //   await client.admin.auth.getToken({ ...formValue.value }).then(({ access_token }) => {
  //     console.log(access_token);

  //     lockButtonLogin.value = false;
  //   });

  await client.admin.auth.createSession({ ...formValue.value }).then(({ user }) => {
    console.log(user);

    setUserStore(user);

    lockButtonLogin.value = false;
  });
}

const { toast } = useToast();
</script>

<template>
  <div class="border border-red-200 h-screen flex items-center justify-center">
    <pre>{{ user ?? "Not Logged" }}</pre>
    <pre>{{ count }}</pre>
    <Card class="w-full max-w-sm">
      <CardHeader>
        <CardTitle class="text-2xl"> Login </CardTitle>

        <!-- <CardDescription>
          Enter your email below to login to your account.
        </CardDescription> -->
      </CardHeader>
      <CardContent class="grid gap-4">
        <div class="grid gap-2">
          <Label for="email">Email</Label>
          <Input
            v-model="formValue.email"
            id="email"
            type="email"
            placeholder=""
            required
          />
        </div>
        <div class="grid gap-2">
          <Label for="password">Senha</Label>
          <Input
            v-model="formValue.password"
            id="password"
            type="password"
            placeholder=""
            required
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button :disabled="lockButtonLogin" class="w-full" @click="handleSubmitLogin">
          Entrar
        </Button>
        <Button
          class="w-full"
          @click="
            () =>
              (user = {
                name: 'andre',
              })
          "
        >
          Add
        </Button>
      </CardFooter>
    </Card>
  </div>
</template>
