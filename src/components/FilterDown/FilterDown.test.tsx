import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FilterDown } from './FilterDown';

describe('FilterDown', () => {
  // when you click on the drop-down list, a list of manufacturers is displayed
  test('clicking the manufacturer dropdown shows a list of manufacturers', async () => {
    render(<FilterDown onClick={() => {}} />);
    const manufacturerDropdown = screen.getByLabelText('Выбрать производителя');
    userEvent.click(manufacturerDropdown);
    const firstManufacturerOption = await screen.findByText('A-Derma');
    expect(firstManufacturerOption).toBeInTheDocument();
  });

  test('clicking the sort button changes the arrow direction and toggles selected manufacturers', async () => {
    // when you click on the button, the direction of the arrow changes and the selected flags for manufacturers are switched
    render(<FilterDown onClick={() => {}} />);
    const sortButton = screen.getByLabelText('Открыть/закрыть сортировку по производителю');
    userEvent.click(sortButton);
    const firstManufacturerCheckbox = await screen.findByLabelText('A-Derma');
    userEvent.click(firstManufacturerCheckbox);
    expect(firstManufacturerCheckbox).toBeChecked();
    const upArrow = screen.getByAltText('upArrow');
    expect(upArrow).toBeInTheDocument();
    userEvent.click(sortButton);
    const downArrow = screen.getByAltText('downArrow');
    expect(downArrow).toBeInTheDocument();
  });
});
