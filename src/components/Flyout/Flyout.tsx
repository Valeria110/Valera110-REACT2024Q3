import { useAppDispatch, useAppSelector } from '../../hooks/hooks.ts';
import './Flyout.scss';
import { unselectAllPeople } from '../../features/people/selectedPeopleSlice.ts';
import { ResType } from '../../types/types.ts';
import { ColorThemeContext } from '../../utils/colorThemeContext.tsx';
import { useContext } from 'react';

function Flyout() {
  const selectedItems = useAppSelector((state) => state.selectedPeople);
  const people = useAppSelector((state) => state.people);
  const dispatch = useAppDispatch();
  const [colorTheme] = useContext(ColorThemeContext);

  const unselectAllItems = () => {
    dispatch(unselectAllPeople());
  };

  function generateCSVData(): string {
    const csvData: string[] = [];
    const headers = 'Name, Height, Mass, Hair Color, Skin Color, Eye Color, Birth Year, Gender';
    csvData.push(headers);

    const selectedPeopleData: ResType[] = [];
    selectedItems.forEach((item) => {
      people.forEach((person) => {
        if (person.url === item.url) selectedPeopleData.push(person);
      });
    });

    selectedPeopleData.forEach((item) => {
      csvData.push(
        `${item.name}, ${item.height}, ${item.mass}, ${item.hair_color}, ${item.skin_color}, ${item.eye_color}, ${item.birth_year}, ${item.gender}`,
      );
    });

    return csvData.join('\n');
  }

  function downloadCSV(csvData: string, fileName: string) {
    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    link.click();
  }

  const handleDownload = () => {
    const csvData = generateCSVData();
    const fileName = `${selectedItems.length}_people.csv`;
    downloadCSV(csvData, fileName);
  };

  if (selectedItems.length) {
    return (
      <div className="Flyout">
        <p className={`Flyout__selected-items-count ${colorTheme}`}>
          <i className="fa-solid fa-heart" style={{ color: '#eb0f0f' }}></i> : {selectedItems.length}
        </p>
        <div className="Flyout__btns-wrapper">
          <button className={`Flyout__unselect-btn ${colorTheme}`} onClick={unselectAllItems}>
            Unselect all <i className="fa-solid fa-xmark" style={{ color: '#c2c2c2', lineHeight: '24px' }}></i>
          </button>
          <button className={`Flyout__download-btn ${colorTheme}`} onClick={handleDownload}>
            Download <i className="fa-solid fa-download" style={{ color: '#005eff', lineHeight: '24px' }}></i>
          </button>
        </div>
      </div>
    );
  }
  return null;
}

export default Flyout;