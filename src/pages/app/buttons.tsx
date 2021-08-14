import React from "react";
import { Button } from "../../components/buttons/Button";
import { Card } from "../../components/cards/Card";
import { Heading } from "../../components/headings/Heading";
import { DashboardLayout } from "../../layouts/DashboardLayout";

const Buttons = () => {
  return (
    <DashboardLayout>
      <Heading title="Buttons" />
      <Card>
        <div className="px-10 py-4 ">
          <h4 className="font-semibold mb-4 text-dark-600 dark:text-light-500">
            Size
          </h4>
          <div className="flex justify-between items-center">
            <Button size="small" type="button">
              Small
            </Button>
            <Button size="regular" type="button">
              Regular
            </Button>
            <Button size="large" type="button">
              Large
            </Button>
          </div>
        </div>
        <div className="px-10 py-4 ">
          <h4 className="font-semibold mb-4 text-dark-600 dark:text-light-500">
            Color
          </h4>
          <div className="flex justify-between items-center">
            <Button size="regular" color="light" type="button">
              Light
            </Button>
            <Button size="regular" color="normal" type="button">
              Normal
            </Button>
            <Button size="regular" color="dark" type="button">
              Dark
            </Button>
          </div>
        </div>
        <div className="px-10 py-4 ">
          <h4 className="font-semibold mb-4 text-dark-600 dark:text-light-500">
            Outline
          </h4>
          <div className="flex justify-around items-center">
            <Button size="regular" type="button">
              Block
            </Button>
            <Button size="regular" type="button">
              Outline
            </Button>
          </div>
        </div>
      </Card>
    </DashboardLayout>
  );
};

export default Buttons;
