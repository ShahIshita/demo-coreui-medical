<script setup>
// Add this import statement at the beginning of your script section
import {
  CHeader,
  CHeaderBrand,
  CHeaderNav,
  CButton,
  CIcon,
  CRow,
  CCol,
  CCard,
  CCardBody,
  CCardHeader,
  CCardTitle,
  CFormSwitch,
  CSpacer,
  CRadioGroup,
  CRadio,
} from "@coreui/vue";

import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const pushNotification = ref(true);
const dailyReminders = ref(true);
const upcomingReminders = ref(true);
const radioDays = ref("monday");
const radioWeight = ref("kg");
const radioHeight = ref("cm");
</script>

<template>
  <div>
    <!-- CoreUI Page Header -->
    <CHeader>
      <CHeaderBrand to="/"> Settings </CHeaderBrand>
      <CHeaderNav>
        <CButton color="secondary" class="ml-auto" @click="router.go(-1)">
          <CIcon name="cil-arrow-left" />
          Go Back
        </CButton>
      </CHeaderNav>
    </CHeader>

    <div>
      <CRow>
        <CCol xs="12" sm="12" md="6" class="mt-2">
          <CCard>
            <CCardHeader
              class="text-left text-h7 font-weight-bold pb-0"
              style="color: #f58220"
            >
              Notification
            </CCardHeader>
            <CCardBody>
              <div class="d-flex justify-center">
                <CCardTitle class="font-weight-medium card__title text-h7"
                  >Push Notification</CCardTitle
                >
                <CSpacer></CSpacer>
                <CFormSwitch
                  size="xl"
                  v-model="pushNotification"
                  color="warning"
                  value="warning"
                ></CFormSwitch>
              </div>
              <CCol class="text-start pl-4 pr-4">
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                  eirmod tempor invidunt ut labore et dolore magna.
                </p>
              </CCol>
            </CCardBody>
          </CCard>
        </CCol>

        <CCol xs="12" sm="12" md="6" class="mt-2">
          <CCard>
            <CCardHeader
              class="text-left text-h7 font-weight-bold pb-0"
              style="color: #f58220"
            >
              Data Setting
            </CCardHeader>
            <CCardTitle class="font-weight-medium card__title text-h7 pb-0"
              >Start of the week</CCardTitle
            >
            <CCol class="text-start pl-4 pr-4">
              <p class="mb-0">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna.
              </p>
            </CCol>

            <CRadioGroup v-model="radioDays" row class="ml-3 mt-1">
              <CRadio value="Monday" color="warning">
                <CFormCheck
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="option1"
                  label="Monday"
                  checked
              /></CRadio>
              <CRadio value="Saturday" color="warning">
                <CFormCheck
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="option1"
                  label="Tuesday"
              /></CRadio>
              <!-- <CRadio value="saturday" color="warning">
                <template v-slot:label>
                  <div class="card__radio">Saturday</div>
                </template>
              </CRadio>
              <CRadio value="sunday" color="warning">
                <template v-slot:label>
                  <div class="card__radio">Sunday</div>
                </template>
              </CRadio> -->
            </CRadioGroup>
          </CCard>
        </CCol>

        <CCol xs="12" sm="12" md="6" class="mt-2 mb-4">
          <CCard>
            <CCardHeader
              class="text-left text-h7 font-weight-bold pb-0"
              style="color: #f58220"
            >
              Units
            </CCardHeader>
            <CCardTitle class="font-weight-medium card__title text-h7 pb-0"
              >Measurements</CCardTitle
            >
            <CCol class="text-start pl-4 pr-4">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, numquam!
              </p>
            </CCol>

            <div class="d-flex align-center">
              <CCardTitle class="font-weight-bold card__title text-h6">Weight</CCardTitle>
              <CSpacer></CSpacer>
              <CRadioGroup v-model="radioWeight" row>
                <CRadio value="kg" color="warning">
                  <template v-slot:label>
                    <div class="card__radio font-weight-regular text-h7">KG</div>
                  </template>
                </CRadio>
                <CRadio value="lbs" color="warning">
                  <template v-slot:label>
                    <div class="card__radio font-weight-regular text-h7">LBS</div>
                  </template>
                </CRadio>
              </CRadioGroup>
            </div>

            <div class="d-flex align-center">
              <CCardTitle class="font-weight-bold card__title text-h6">Height</CCardTitle>
              <CSpacer></CSpacer>
              <CRadioGroup v-model="radioHeight" row>
                <CRadio value="cm" color="warning">
                  <template v-slot:label>
                    <div class="card__radio font-weight-regular text-h7">CM</div>
                  </template>
                </CRadio>
                <CRadio value="feet" color="warning">
                  <template v-slot:label>
                    <div class="card__radio font-weight-regular text-h7">FEET</div>
                  </template>
                </CRadio>
              </CRadioGroup>
            </div>
          </CCard>
        </CCol>

        <CCol xs="12" sm="12" md="6" class="mt-2 mb-4">
          <CCard>
            <CCardHeader
              class="text-left text-h7 font-weight-bold pb-0"
              style="color: #f58220"
            >
              Reminders
            </CCardHeader>
            <div class="d-flex justify-center">
              <CCardTitle class="font-weight-bold card__title text-h6"
                >Daily Reminders</CCardTitle
              >

              <CFormSwitch size="xl" v-model="dailyReminders" color="warning" />
            </div>

            <CCardBody class="text-start pl-4 pr-4">
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.
              </p>
            </CCardBody>

            <div class="d-flex justify-center">
              <CCardTitle class="font-weight-bold card__title text-h6"
                >Upcoming Reminders</CCardTitle
              >

              <CFormSwitch size="xl" v-model="upcomingReminders" color="warning" />
            </div>

            <CCardBody class="text-start pl-4 pr-4">
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.
              </p>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  </div>
</template>

<style scoped>
h6 {
  font-size: 16px;
  margin-top: 5px;
}
.card__title {
  font-size: 24px;
  margin-top: 5px;
}
.card__text {
  font-size: 18px;
  font: normal normal 300 18px/30px Gilroy;
}
.card__radio {
  font: normal normal 600 20px/24px Lato;
}
.card__radio {
  font-family: "Gilroy";
  font-weight: 500;
  color: #212121;
  font-size: 18px;
}
.v-sheet.v-card {
  border-radius: 26px;
  width: 100%;
  margin-bottom: 20px;
  padding: 15px 10px;
}
.text-h7 {
  font-size: 18px;
}
.v-input--radio-group.v-input--radio-group--row .v-radio {
  min-width: 100px;
  margin-top: 10px;
  font-weight: 100;
}
@media only screen and (max-width: 600px) {
  .card__title {
    font-size: 20px;
  }
  .card__radio {
    font-size: 14px;
  }
  .v-input--radio-group.v-input--radio-group--row .v-radio {
    min-width: unset;
  }
}
</style>
