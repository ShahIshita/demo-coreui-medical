<template>
  <div>
    <!-- Toast Section -->
    <CToast
      :autohide="false"
      color="primary"
      class="text-white align-items-center"
      :visible="toastVisible"
    >
      <div class="d-flex">
        <CToastBody>{{ toastMessage }}</CToastBody>
        <CToastClose class="me-2 m-auto" @click="hideToast" white />
      </div>
    </CToast>
    <CContainer fluid class="fill-height pt-0 pb-0">
      <CRow class="login-row">
        <!-- Left Block -->
        <CCol
          col="12"
          sm="6"
          md=""
          class="d-flex flex-column align-items-center login-left-block"
        >
          <CImage class="ml-auto" :src="arrow" height="140" width="140" contain />
          <div class="text-start mt-n5 mb-15">
            <CCol class="d-flex md10">
              <h1>
                Sneak Peek <br />
                Into Health
              </h1>
            </CCol>
            <CCol md="12">
              <p class="mt-5 my-md-10 ml-sm-0">
                Get access to essential health data that aids in taking crucial decisions
                for life. Track vital information in a graphical view and hasten the next
                step.
              </p>
            </CCol>
            <div class="box-item-row">
              <div class="mini-box-item">
                <div class="item">
                  <CImage :src="heart" class="item-img" contain></CImage>
                </div>
              </div>
              <div class="mini-box-item">
                <div class="item">
                  <CImage :src="heart1" class="item-img" contain></CImage>
                </div>
              </div>
              <div class="mini-box-item">
                <div class="item">
                  <CImage :src="watch" class="item-img" contain></CImage>
                </div>
              </div>
            </div>
          </div>
          <CImage
            class="mr-auto mt-auto mb-n1 ml-n10 building-image"
            :src="loginBuilding"
            width="320"
            contain
          />
        </CCol>

        <!-- Center Block -->
        <CCol col="12" class="pa-0 login-center-block">
          <CImage :src="MaskGroup" width="100%" contain top class="logo1" />
          <CImage :src="MaskGroup1" width="100%" contain top class="logo2" />
        </CCol>

        <!-- Right Block -->
        <CCol class="d-flex flex-column mx-auto login-right-block">
          <div class="login--box">
            <CImage :src="logoBlack" contain class="logo-img" />
            <div class="inner-block">
              <h2>Welcome Back!</h2>
              <p class="mt-5" style="font-size: 20px">Login into your account</p>

              <CForm class="mt-4" ref="form" @submit.prevent="login">
                <div class="input-group">
                  <CInputGroup>
                    <CFormInput
                      type="email"
                      v-model="email"
                      name="email"
                      placeholder="Email"
                      required
                    />

                    <CInputGroupText>
                      <CIcon name="cil-envelope-closed" />
                    </CInputGroupText>
                  </CInputGroup>

                  <CInputGroup class="mt-2">
                    <CFormInput
                      v-model="password"
                      name="password"
                      placeholder="Password"
                      hint="At least 6 characters"
                      required
                    />

                    <CInputGroupText>
                      <CIcon name="cil-lock-locked" />
                    </CInputGroupText>
                  </CInputGroup>

                  <CButton class="mt-2" color="warning" type="submit" width="100%"
                    >Login</CButton
                  >
                </div>
              </CForm>
            </div>
            <h5 class="font-weight-regular">
              © Copyright 2022 Bacancy. All Right Reserved.
            </h5>
          </div>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script setup>
import arrow from "@/assets/data/arrow1.svg";
import heart from "@/assets/data/Heart hand.png";
import heart1 from "@/assets/data/Heart hand1.png";
import watch from "@/assets/data/watch.png";
import loginBuilding from "@/assets/data/login-building.png";
import MaskGroup from "@/assets/data/Mask Black.svg";
import MaskGroup1 from "@/assets/data/Mask 1.png";
import logoBlack from "@/assets/data/logo-black.png";
import { authService } from "@/services/AuthService";
import { ref } from "vue";
import { useRouter } from "vue-router";
const toastVisible = ref(false);
const toastMessage = ref("");

const showToast = (message) => {
  toastMessage.value = message;
  toastVisible.value = true;
};

const hideToast = () => {
  toastVisible.value = false;
};

const email = ref("");
const password = ref("");
const router = useRouter();

const login = async () => {
  const result = await authService.login(email.value, password.value);

  if (result.success) {
    // Login successful, you may choose to redirect or show a success message
    showToast(result.message, "success");
    router.push("/dashboard");
  } else {
    // Login failed, show an error message
    showToast(result.message, "danger");
  }

  // Simple static login logic (replace with your actual authentication logic)
  // const hardcodedemail = "demo@gmail.com";
  // const hardcodedPassword = "demo";

  // if (email.value === hardcodedemail && password.value === hardcodedPassword) {
  //   // Successful login
  //   console.log("Login successful");
  //   router.push("/dashboard"); // Redirect to the dashboard route
  // } else {
  //   // Failed login
  //   console.log("Login failed");
  // }
};
</script>

<style scoped>
.fill-height {
  background: transparent
    radial-gradient(closest-side at 34% 48%, #313131 0%, #171617 100%) 0% 0% no-repeat
    padding-box;
}
p {
  font-size: 16px;
  color: white;
}
h1 {
  font-size: 69px;
  width: 394px;
  height: 174px;
  text-align: left;
  font: normal normal 900 69px/88px Gilroy ☞;
  text-align: left;
  color: white;
}
h2 {
  font-size: 36px;
}
h5 {
  font: normal normal medium 16px/19px Gilroy;
  margin-top: 250px;
  width: 340px;
  height: 19px;
  text-align: center;
  font-size: 20px;
}
.box-item-row {
  display: flex;
  margin-left: -4%;
  margin-right: -4%;
}
.mini-box-item {
  padding-left: 4%;
  padding-right: 4%;
  flex-grow: 0;
  width: 33.33%;
  max-width: 200px;
}
.mini-box-item .item {
  padding: 12%;
  width: 130px;
  height: 138px;
  border: 1px solid #c1bebe;
  border-radius: 30%;
}
.container.fill-height {
  align-items: stretch;
}
.login-left-block {
  padding-top: 100px;
  padding-left: 50px;
}
.building-image {
  width: 40%;
  max-width: 320px;
}
.login--box {
  margin-top: 40px !important;
  background-color: #fff;
  border: 1px solid #46464657;
  box-shadow: inset 0px 3px 99px #020203;
  padding: 60px 40px;
  border-radius: 50px;
  margin: auto;
  width: 500px;
  height: 850px;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  color: white;
  background-image: radial-gradient(#3c3c59, #000000);
}
.inner-block {
  padding: 20px 0;
  margin: 15% 0;
  text-align: center;
  font: normal normal 900 36px/46px Gilroy ☞;
  letter-spacing: 0px;
}

p {
  font-size: 18px;
}
.logo-img {
  height: 70px;
  object-fit: contain;
}
.mt-2 {
  width: 420px;
  height: 60px;
  background: #f58220 0% 0% no-repeat padding-box;
  border-radius: 10px;
  opacity: 1;
  /* UI Properties */
  text-align: center;
  font: normal normal bold 18px/23px Gilroy ☞;
  letter-spacing: 0px;
  color: #ffffff;
}
.logo1 {
  position: absolute;
  width: 500px;
}
.logo2 {
  position: absolute;
  top: 210px;
  left: 610px;
  width: 540px;
  height: 520px;
}
.input-group {
  width: 420px;
  height: 60px;
  background: var(--base-color) 0% 0% no-repeat padding-box;
  background: #2b2934 0% 0% no-repeat padding-box;
  border-radius: 10px;
  opacity: 1;
}

@media (max-width: 1199px) and (min-width: 600px) {
  .login-center-block {
    display: none;
  }
}
@media (max-width: 1800px) {
  .inner-block {
    margin: 20px 0;
  }
  .logo-img {
    height: 54px;
  }
}
@media (max-width: 1400px) {
  h1 {
    font-size: 52px;
    line-height: 1.5;
  }
  .login--box {
    max-width: 500px;
  }
}
@media (max-width: 991px) {
  h1 {
    font-size: 42px;
  }
  .login--box {
    width: 100%;
    padding: 30px 20px;
    margin: 30px auto;
  }
  h2 {
    font-size: 30px;
  }
  .logo-img {
    height: 50px;
  }
}
@media (max-width: 767px) {
  .login-left-block {
    padding-left: 15px;
  }
}
@media (max-width: 600px) {
  .login-center-block {
    order: 1;
    width: 100%;
    flex: none;
  }
  .login-left-block {
    order: 2;
  }
  .login-left-block h1 br {
    display: none;
  }
  .box-item-row {
    padding: 0 1rem;
  }
  .login-left-block h1,
  .login-left-block p {
    text-align: center;
    width: 100%;
  }
  .login-right-block {
    order: 3;
  }
  .login-center-block img {
    padding-left: calc(400px / 10.6);
    width: 360px;
    margin-top: 0;
  }
  .logo-img {
    position: absolute;
    top: 20px;
    z-index: 2;
    left: 50%;
    transform: translateX(-50%);
    height: 42px;
  }
  .login-left-block h1 {
    font-size: 32px;
  }
  .login-left-block {
    position: absolute;
    top: 440px;
    padding: 0 20px;
  }
  .login-right-block {
    visibility: hidden;
    animation: fadeUp-4a679094 1s forwards ease-in;
    animation-delay: 0.5s;
    padding: 10px 16px;
    position: relative;
    z-index: 9;
    transform: translateY(100%);
  }
  .login--box {
    margin: 0 auto;
    max-width: 100%;
  }
  .login-right-block .logo-img {
    display: none;
  }
  .inner-block {
    padding: 0;
    margin-bottom: 20px;
  }
  @keyframes fadeUp {
    from {
      visibility: hidden;
    }
    to {
      visibility: visible;
      transform: translateY(-14%);
    }
  }
}
</style>
