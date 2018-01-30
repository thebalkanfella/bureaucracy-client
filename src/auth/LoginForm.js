import React, { Component } from 'react'
import { Form, Icon, Input, Button, Row, Col } from 'antd'
import PropTypes from 'prop-types'

const FormItem = Form.Item;

class LoginFormNormal extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onSubmit(values, e)
      }
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form

    return (
      <Row type="flex" align="middle" justify="space-around" className="login-form-row">
        <Col span={4}>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              {getFieldDecorator('email', {
                rules: [{ required: true, message: 'Задължително поле!' }],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" autoComplete="username"/>
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Задължително поле!' }],
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" autoComplete="current-password" />
              )}
            </FormItem>
            <FormItem>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Вход
              </Button>
            </FormItem>
          </Form>
        </Col>
      </Row>
    );
  }
}

export const LoginForm = Form.create()(LoginFormNormal)

LoginForm.propTypes = {
    onSubmit: PropTypes.func
}

LoginForm.defaultProps = {
    onSubmit: _ => void 0
}