import React from 'react'
import { Button, Result } from 'antd';

function PageNotFound() {
  return (
    <Result
    status="403"
    title="403"
    subTitle="Sorry, the page you visited does not exist."
    // extra={<Button type="primary">Back Home</Button>}
  />
  )
}

export default PageNotFound