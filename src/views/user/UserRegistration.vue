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
              <h2>Register</h2>
              <p>Signup for create an account</p>

              <CForm v-if="currentPage === 1" @submit.prevent="nextPage">
                <p>Step 1 of 2</p>
                <h3>Personal Details</h3>
                <div class="input-group">
                  <CInputGroup>
                    <CFormInput
                      type="text"
                      v-model="formData.firstName"
                      name="firstName"
                      placeholder="First Name"
                      required
                    />
                  </CInputGroup>

                  <CInputGroup class="mt-2">
                    <CFormInput
                      type="text"
                      v-model="formData.lastName"
                      name="lastName"
                      placeholder="Last Name"
                      required
                    />
                  </CInputGroup>

                  <CInputGroup class="mt-2">
                    <CFormInput
                      type="date"
                      v-model="formData.dateOfBirth"
                      name="dateOfBirth"
                      placeholder="Date of Birth"
                      required
                    />
                  </CInputGroup>

                  <CInputGroup class="mt-2">
                    <CFormInput
                      type="text"
                      v-model="formData.medicalId"
                      name="medicalId"
                      placeholder="Medical ID"
                      required
                    />
                  </CInputGroup>
                  <CButton class="mt-2" color="warning" type="submit" width="100%"
                    >Next</CButton
                  >
                </div>
              </CForm>

              <CForm v-if="currentPage === 2" @submit.prevent="submitForm">
                <p>Step 2 of 2</p>
                <h3>Signup Details</h3>
                <div class="input-group">
                  <CInputGroup class="mt-2">
                    <CFormInput
                      type="email"
                      v-model="formData.email"
                      name="email"
                      placeholder="Email"
                      required
                    />
                  </CInputGroup>

                  <CInputGroup class="mt-2">
                    <CFormInput
                      type="password"
                      v-model="formData.password"
                      name="password"
                      placeholder="Password"
                      required
                    />
                  </CInputGroup>

                  <CInputGroup class="mt-2">
                    <CFormInput
                      type="password"
                      v-model="formData.confirmPassword"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      required
                    />
                  </CInputGroup>

                  <CInputGroup class="mt-2">
                    <CFormInput
                      type="tel"
                      v-model="formData.phoneNumber"
                      name="phoneNumber"
                      placeholder="Phone Number"
                      required
                    />
                  </CInputGroup>

                  <CButton
                    class="previousButton"
                    type="button"
                    @click="prevPage"
                    width="50%"
                    ><CImage :src="arrowBack"
                  /></CButton>
                  <CButton class="submitButton" type="submit" width="100%"
                    >Submit</CButton
                  >
                </div>
              </CForm>
            </div>
            <!-- <p class="font-weight-regular">Allready have a account? Login</p> -->
            <h5>© Copyright 2022 Bacancy. All Right Reserved.</h5>
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
import arrowBack from "@/assets/data/arrow-back.svg";
import { authService } from "@/services/AuthService";
import { useRouter } from "vue-router";
import { ref } from "vue";
const router = useRouter();
const currentPage = ref(1);
const formData = ref({
  firstName: "",
  lastName: "",
  dateOfBirth: "",
  medicalId: "",
  google: "",
  email: "",
  password: "",
  confirmPassword: "",
  phoneNumber: "",
});

const toastVisible = ref(false);
const toastMessage = ref("");

const showToast = (message) => {
  toastMessage.value = message;
  toastVisible.value = true;
};

const hideToast = () => {
  toastVisible.value = false;
};
const nextPage = () => {
  currentPage.value++;
};

const prevPage = () => {
  currentPage.value--;
};

const submitForm = async () => {
  const result = await authService.register(
    formData.value.email,
    formData.value.password
  );

  if (result.success) {
    showToast(result.message, "success");
    router.push("/login");
  } else {
    showToast(result.message, "danger");
  }
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
h3 {
  color: #f58220;
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
.submitButton {
  width: 350px;
  background: #f58220 0% 0% no-repeat padding-box;
  margin-top: 10px;
  height: 50px;
  margin-left: 10px;
  border-radius: 10px;
  opacity: 1;
  text-align: center;
  font: normal normal bold 18px/23px Gilroy ☞;
  letter-spacing: 0px;
  color: #ffffff;
}
.previousButton {
  height: 20px;
  margin-top: 15px;
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
  height: 50px;
  background: #f58220 0% 0% no-repeat padding-box;
  border-radius: 10px;
  opacity: 1;
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
  height: 50px;
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
