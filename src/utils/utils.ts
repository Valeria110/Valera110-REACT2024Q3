import { setFormData } from '../features/formSlice';
import { AppDispatch } from '../store/store';
import { IFormData } from '../types/types';

export function saveFormDataToStore(formData: IFormData, dispatch: AppDispatch) {
  const reader = new FileReader();
  reader.readAsDataURL(formData.file as File);
  reader.onload = () => {
    const base64Img = reader.result as string;
    dispatch(setFormData({ ...formData, file: base64Img }));
  };
}
