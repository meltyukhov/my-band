// src/artists/__tests__/AddArtistButton.spec.js
import { render, fireEvent, screen } from '@testing-library/react';
import AddArtistButton from '../AddArtistButton';
import '@testing-library/jest-dom';

describe('AddArtistButton', () => {
  it('renders the Add Artist button', async () => {
    render(<AddArtistButton />);
    expect(await screen.findByText('Add Artist')).toBeInTheDocument();
  });

  it('opens the AddArtistDialog when clicked', async() => {
    render(<AddArtistButton />);
    fireEvent.click(await screen.findByText('Add Artist'));
    expect(await screen.findByText('Create')).toBeInTheDocument();
  });
});
