import { Button, Checkbox, Modal, Switch } from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';

function App() {
  const [opened, { open, close }] = useDisclosure();

  return (
    <div className="flex justify-center items-center w-full mx-auto h-screen">
      <Modal opened={opened} onClose={close} centered withCloseButton={false} padding="0" size="lg">
        <div className="flex flex-col">
          <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:justify-between bg-green-500 px-4 py-3 text-white text-lg">
            <h3 className="font-semibold text-gray-50">Personalization Settings:</h3>
            <div className="flex items-center">
              <Switch color="yellow" label="Use Account Research" labelPosition="left" className="text-white" />
            </div>
          </div>
          <div className="flex flex-col pb-8 pt-4">
            <div className="px-8 py-2 flex flex-col">
              <h3 className="mb-3 font-semibold text-gray-500">Profile</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col space-y-3">
                  <Checkbox label="LinkedIn Bio" color="green" className="text-gray-500" />
                  <Checkbox label="Years of experience" color="green" />
                  <Checkbox label="Current Experience" color="green" />
                </div>
                <div className="flex flex-col space-y-3">
                  <Checkbox label="List of past jobs" color="green" />
                  <div className="flex flex-col space-y-2">
                    <div className="flex space-x-3 items-center">
                      <Checkbox label="Current job description" disabled color="green" />
                      <h4 className="rounded-full text-xs uppercase font-bold bg-gray-300 px-2 py-1 text-red-700">disabled</h4>
                    </div>
                    <div className="flex space-x-3 items-center">
                      <Checkbox label="Current Job specialities" disabled color="green" />

                      <h4 className="rounded-full text-xs uppercase font-bold bg-gray-300 px-2 py-1 text-red-700">disabled</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-8 bg-gray-300 w-[90%] mx-auto h-0.5 my-3" />

            <div className="px-8 py-2 flex flex-col">
              <h3 className="mb-3 font-semibold text-gray-500">Account</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col space-y-3">
                  <Checkbox label="LinkedIn Bio" color="green" />
                  <Checkbox label="Years of experience" color="green" />
                  <Checkbox label="Current Experience" color="green" />
                </div>
                <div className="flex flex-col space-y-3">
                  <Checkbox label="List of past jobs" color="green" />
                  <div className="flex flex-col space-y-2">
                    <div className="flex space-x-3 items-center">
                      <Checkbox label="Current job description" disabled color="green" />
                      <h4 className="rounded-full text-xs uppercase font-bold bg-gray-300 px-2 py-1 text-red-700">disabled</h4>
                    </div>
                    <div className="flex space-x-3 items-center">
                      <Checkbox label="Current Job specialities" disabled color="green" />

                      <h4 className="rounded-full text-xs uppercase font-bold bg-gray-300 px-2 py-1 text-red-700">disabled</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </Modal>
      <div className="px-4 py-3 bg-green-500 rounded-md hover:bg-[#37b24d]">
        <Button color="green" className="text-base" onClick={open}>Click to Personalize</Button>
      </div>
    </div>
  )
}

export default App
