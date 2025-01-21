def on_forever():
    driver.control_motor(driver.Address.ADD64,
        driver.Motor.MOTOR_A,
        driver.Rotate.CLOCKWISE,
        50)
    driver.control_motor(driver.Address.ADD64,
        driver.Motor.MOTOR_B,
        driver.Rotate.CLOCKWISE,
        50)
    driver.control_servo(driver.Address.ADD64, driver.Servo.SERVO1, 60)
    driver.control_servo(driver.Address.ADD64, driver.Servo.SERVO2, 120)
basic.forever(on_forever)
