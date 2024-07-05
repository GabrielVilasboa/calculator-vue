<template>
  <div class="calculator">
    <DisplayComponent>
      {{ firstNumber }} {{ operation }} {{ secondNumber }}
      <p class="result" v-if="result != ''">&nbsp;= {{ result }}</p>
    </DisplayComponent>
    <div class="keyboard">
      <div class="key" v-for="(button, index) in buttons" :key="index">
        <ButtonComponent @click="buttonClicked(button.type, button.value)">
          <p>{{ button.value }}</p>
        </ButtonComponent>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonComponent from '../components/ButtonComponent.vue'
import DisplayComponent from '../components/DisplayComponent.vue'
import { BUTTON_TYPES, BUTTONS } from '../contants/constants'

export default {
  components: {
    ButtonComponent,
    DisplayComponent
  },
  data() {
    return {
      firstNumber: '',
      secondNumber: '',
      operation: null,
      result: '',
      lastResult: '',
      buttons: BUTTONS
    }
  },
  methods: {
    calculator() {
      const firstNumber = parseFloat(this.firstNumber)
      const secondNumber = parseFloat(this.secondNumber)

      if (isNaN(firstNumber) || isNaN(secondNumber)) {
        throw new Error('Os operandos devem ser números válidos.')
      }

      switch (this.operation) {
        case '+':
          this.result = (firstNumber + secondNumber).toString()
          break
        case '-':
          this.result = (firstNumber - secondNumber).toString()
          break
        case '*':
          this.result = (firstNumber * secondNumber).toString()
          break
        case '/':
          if (secondNumber === 0) {
            throw new Error('Divisão por zero não é permitida.')
          }
          this.result = (firstNumber / secondNumber).toString()
          break
        default:
          this.result = null
      }
    },
    buttonClicked(type, value) {
      if (value == '=') {
        this.clearDisplay()
        this.firstNumber = this.lastResult
      } else if (type == BUTTON_TYPES.NUMBER) {
        this.addNumbers(value)
      } else if (!this.operation && type == BUTTON_TYPES.OPERATOR) {
        this.operation = value
      } else if (type == BUTTON_TYPES.SPECIAL) {
        this.handleSpecialOperator(value)
      }
    },

    addNumbers(value) {
      if (!this.operation) {
        if (this.firstNumber == '0') {
          this.firstNumber = value
        } else {
          this.firstNumber += value
        }
      } else {
        if (this.secondNumber == '0') {
          this.secondNumber = value
          this.calculator()
        } else {
          this.secondNumber += value
          this.calculator()
        }
      }
    },

    handleSpecialOperator(value) {
      switch (value) {
        case 'bsksp':
          this.backspace()
          break
        case '%':
          this.percentageOperator()
          break
        case 'del':
          this.clearDisplay()
          break
        case '.':
          this.handleFloatPoint()
          break
      }
    },

    percentageOperator() {
      if (this.secondNumber != '') {
        this.secondNumber = (parseFloat(this.secondNumber) * 0.01).toString()
        this.calculator()
      } else if (this.firstNumber != '') {
        this.firstNumber = (parseFloat(this.firstNumber) * 0.01).toString()
      }
    },
    handleFloatPoint() {
      if (this.secondNumber != '' && !this.secondNumber.includes('.')) {
        this.secondNumber += '.'
      } else if (this.firstNumber != '' && !this.firstNumber.includes('.')) {
        this.firstNumber += '.'
      }
    },
    backspace() {
      if (this.secondNumber != '') {
        this.secondNumber = this.secondNumber.slice(0, -1)
        if (this.secondNumber != '') {
          this.calculator()
        } else {
          this.result = ''
        }
      } else if (this.operation) {
        this.operation = null
      } else if (this.firstNumber != '') {
        this.firstNumber = this.firstNumber.slice(0, -1)
      }
    },
    clearDisplay() {
      this.firstNumber = ''
      this.secondNumber = ''
      this.operation = null
      this.lastResult = this.result
      this.result = ''
    }
  }
}
</script>

<style>
.calculator {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.keyboard {
  display: flex;
  flex-wrap: wrap;
  width: 400px;
}
</style>
