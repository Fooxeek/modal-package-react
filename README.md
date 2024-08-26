# modal-react-loganb

A simple modal component for React.

## Installation

```bash
npm install modal-react-loganb
```

## Prerequisites

Before using modal-react-loganb, ensure that your project meets the following requirements:

- React version: 18.0.0 or higher
- Node.js version: 20.0.0 or higher
- npm version: 10.0.0 or higher

## Usage

To use the modal-react-loganb component, follow these steps:

1. Import the Modal component:

```bash
import { Modal } from "modal-react-loganb";
```

2. Integrate the Modal into your React component:

```bash

import React, { useState } from "react";
import { Modal } from "modal-react-loganb";

function ExampleComponent() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Open Modal</button>
      <Modal isVisible={isModalVisible} onClose={handleCloseModal}/>
    </div>
  );
}

export default ExampleComponent;
```

## Props

The Modal component accepts the following props:

- isVisible: A boolean that determines whether the modal is visible (true) or hidden (false).
- onClose: A function that will be called when the modal's close button is clicked, typically used to toggle the isVisible state.
