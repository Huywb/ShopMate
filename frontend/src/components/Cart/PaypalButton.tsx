import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

interface PaypalButtonProps {
  amount: string;
  onSuccess: () => void;
}

const PaypalButton: React.FC<PaypalButtonProps> = ({ amount, onSuccess }) => {
  return (
    <PayPalScriptProvider
      options={{
        clientId:"AbC_kdoP_8fO-emiRNB345EeTeaF4ukd-X6aRdUPD_wa0fL4yag9dZ8YzjPlEMUrN225sp075j33nopc",
      }}
    >
      <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: amount, 
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order!.capture().then(() => {
            onSuccess();
          });
        }}
      />
    </PayPalScriptProvider>
  );
};

export default PaypalButton;
