<template>
  <div class="h-screen flex w-full bg-img" id="login-page">
    <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 mx-auto self-center">
      <vx-card>
        <div slot="no-body" class="full-page-bg-color">
          <div class="vx-row">
            <div class="vx-col hidden sm:hidden md:hidden lg:block lg:w-1/2 mx-auto self-center">
              <!-- <img src="@/assets/images/pages/login.png" alt="login" class="mx-auto"> -->
            </div>
            <div class="vx-col sm:w-full md:w-full lg:w-1/2 mx-auto self-center bg-white pb-10">
              <div class="p-8">
                <div class="vx-card__title mb-8">
                  <h4 class="mb-4">Login</h4>
                  <p>Welcome</p>
                </div>
                <vs-input
                  type="email"
                  icon="icon icon-user"
                  icon-pack="feather"
                  label-placeholder="Email"
                  v-model="user.email"
                  class="w-full mb-6 no-icon-border"
                />
                <vs-input
                  type="password"
                  icon="icon icon-lock"
                  icon-pack="feather"
                  label-placeholder="Password"
                  v-model="user.password"
                  class="w-full mb-4 no-icon-border"
                />
                <div class="flex flex-wrap justify-between my-5">
                  <!-- <vs-checkbox v-model="checkBox1" class="mb-3">Remember Me</vs-checkbox> -->
                  <!--<router-link to="/pages/forgot-password">Forgot Password?</router-link>-->
                </div>
                <!--<vs-button  type="border" to="/register">Register</vs-button>-->
                <vs-button class="float-right" @click.prevent="submit">Login</vs-button>

                <!--<vs-divider position="center" class="my-8"></vs-divider>-->

                <!--<div class="social-login mb-4 flex flex-wrap justify-between">
                  <span>Or Login With</span>
                  <div class="social-login-buttons flex">
                    <vs-button color="#1551b1" class="mr-4 px-8" icon="icon icon-facebook" icon-pack="feather"></vs-button>
                    <vs-button color="#00aaff" class="px-8" icon="icon icon-twitter" icon-pack="feather"></vs-button>
                  </div>
                </div>-->
              </div>
            </div>
          </div>
        </div>
      </vx-card>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      user: {
        email: null,
        password: null
      },
      checkbox: false
    };
  },
  mounted() {
    var self = this;
    window.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
        self.submit();
      }
    });
  },
  methods: {
    submit() {
      this.$store
        .dispatch("LoginUser", this.user)
        .then(() => {
          this.$router.push({ path: "/" });
        })
        .catch(err => {
          this.$vs.notify({
            color: "danger",
            title: "Not LogIn",
            text: "Incorrect email address and / or password"
          });
        });
    }
  }
};
</script>

<style>
</style>
