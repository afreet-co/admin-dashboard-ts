import React from "react";
import { Button } from "../../components/buttons/Button";
import { Card } from "../../components/cards/Card";
import { DashboardLayout } from "../../layouts/DashboardLayout";

const Buttons = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-wrap space-y-12">
        <Card title="Buttons">
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
              <Button size="regular" outline type="button">
                Outline
              </Button>
            </div>
          </div>
        </Card>
        <Card title="Inverted Buttons">
          <div className="px-10 py-4 ">
            <h4 className="font-semibold mb-4 text-dark-600 dark:text-light-500">
              Size
            </h4>
            <div className="flex justify-between items-center">
              <Button inverted size="small" type="button">
                Small
              </Button>

              <Button inverted size="regular" type="button">
                Regular
              </Button>
              <Button inverted size="large" type="button">
                Large
              </Button>
            </div>
          </div>
          <div className="px-10 py-4 ">
            <h4 className="font-semibold mb-4 text-dark-600 dark:text-light-500">
              Color
            </h4>
            <div className="flex justify-between items-center">
              <Button inverted size="regular" color="light" type="button">
                Light
              </Button>
              <Button inverted size="regular" color="normal" type="button">
                Normal
              </Button>
              <Button inverted size="regular" color="dark" type="button">
                Dark
              </Button>
            </div>
          </div>
          <div className="px-10 py-4 ">
            <h4 className="font-semibold mb-4 text-dark-600 dark:text-light-500">
              Outline
            </h4>
            <div className="flex justify-around items-center">
              <Button inverted size="regular" type="button">
                Block
              </Button>
              <Button inverted size="regular" outline type="button">
                Outline
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Buttons;
