let disL = 0
let disR = 0
driver.controlServo(driver.Address.add64, driver.Servo.Servo1, 90)
driver.pauseMotor(driver.Address.add64, driver.Pause.Brake, driver.Motor.MotorA)
driver.pauseMotor(driver.Address.add64, driver.Pause.Brake, driver.Motor.MotorB)
basic.forever(function () {
    if (ultraSonic.readDistance(ultraSonic.PingUnit.Centimeters, ultraSonic.PinKit.Port1) <= 15) {
        driver.pauseMotor(driver.Address.add64, driver.Pause.Brake, driver.Motor.MotorA)
        driver.pauseMotor(driver.Address.add64, driver.Pause.Brake, driver.Motor.MotorB)
        driver.controlServo(driver.Address.add64, driver.Servo.Servo1, 0)
        basic.pause(500)
        disR = ultraSonic.readDistance(ultraSonic.PingUnit.Centimeters, ultraSonic.PinKit.Port1)
        driver.controlServo(driver.Address.add64, driver.Servo.Servo1, 180)
        basic.pause(500)
        disL = ultraSonic.readDistance(ultraSonic.PingUnit.Centimeters, ultraSonic.PinKit.Port1)
        driver.controlServo(driver.Address.add64, driver.Servo.Servo1, 90)
        basic.pause(500)
        if (disR >= disL) {
            driver.controlMotor(driver.Address.add64, driver.Motor.MotorB, driver.Rotate.Clockwise, 80)
            driver.controlMotor(driver.Address.add64, driver.Motor.MotorA, driver.Rotate.Clockwise, 80)
        } else {
            driver.controlMotor(driver.Address.add64, driver.Motor.MotorA, driver.Rotate.CounterClockwise, 80)
            driver.controlMotor(driver.Address.add64, driver.Motor.MotorB, driver.Rotate.CounterClockwise, 80)
        }
        basic.pause(700)
    } else {
        driver.controlMotor(driver.Address.add64, driver.Motor.MotorA, driver.Rotate.CounterClockwise, 80)
        driver.controlMotor(driver.Address.add64, driver.Motor.MotorB, driver.Rotate.Clockwise, 80)
    }
})
