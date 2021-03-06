<?php

/*
 * This file is part of Dotpayds project.
 * (c) Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 *
 * @license   https://opensource.org/licenses/MIT  The MIT License
 */

declare(strict_types=1);

/*
 * This file is part of Dotpayds project.
 * (c) Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 *
 * @license   https://opensource.org/licenses/MIT  The MIT License
 */

namespace Dotpay\Request\Validator;

use Dotpay\Request\Validator\Constraint\ApiVersionConstraint;
use Symfony\Component\Validator\Test\ConstraintValidatorTestCase;

/**
 * @coversDefaultClass \Dotpay\Validator\ApiVersionValidator
 */
class ApiVersionValidatorTest extends ConstraintValidatorTestCase
{
    /**
     * @covers ::validate
     * @dataProvider provideValidApiVersion
     *
     * @param string API version
     */
    public function testApiVersionIsValid(string $apiVersion)
    {
        $this->validator->validate($apiVersion, new ApiVersionConstraint());
        $this->assertNoViolation();
    }

    /**
     * @covers ::validate
     * @dataProvider provideInvalidApiVersion
     *
     * @param string API version
     * @param string API version as string
     * @param mixed $apiVersionAsString
     */
    public function testApiVersionIsInvalid(string $apiVersion, $apiVersionAsString)
    {
        $apiVersionConstraint = new ApiVersionConstraint(
            [
                'message' => 'myMessage',
            ]
        );

        $this->validator->validate($apiVersion, $apiVersionConstraint);

        $this->buildViolation('myMessage')
            ->setParameter('{{ api_version }}', $apiVersionAsString)
            ->assertRaised();
    }

    /**
     * @see testValidate()
     *
     * @return array
     */
    public function provideValidApiVersion(): array
    {
        return [
            ['dev'],
        ];
    }

    /**
     * @see testValidate()
     *
     * @return array
     */
    public function provideInvalidApiVersion(): array
    {
        return [
            ['prod', 'prod'],
            [0, '0'],
            [false, ''],
        ];
    }

    /**
     * {@inheritdoc}
     *
     * @return ApiVersionValidator
     */
    protected function createValidator()
    {
        return new ApiVersionValidator();
    }
}
