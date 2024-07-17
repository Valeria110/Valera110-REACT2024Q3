import { useAppDispatch, useAppSelector } from '../../hooks/hooks.ts';
import './Flyout.scss';
import { unselectAllPeople } from '../../features/people/selectedPeopleSlice.ts';
import { ResType } from '../../types/types.ts';

function Flyout() {
  const selectedItems = useAppSelector((state) => state.selectedPeople);
  const people = useAppSelector((state) => state.people);
  const dispatch = useAppDispatch();

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
        <p className="Flyout__selected-items-count">
          <i className="fa-solid fa-heart" style={{ color: '#eb0f0f' }}></i> : {selectedItems.length}
        </p>
        <div className="Flyout__btns-wrapper">
          <button className="Flyout__unselect-btn" onClick={unselectAllItems}>
            Unselect all
          </button>
          <button className="Flyout__download-btn" onClick={handleDownload}>
            Download
          </button>
        </div>
      </div>
    );
  }
  return null;
}

export default Flyout;
