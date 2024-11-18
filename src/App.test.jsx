import React from "react";
import { render, fireEvent } from '@testing-library/react';
import App from "./App";

test('renders header text', () => {
    const { getByText } = render(<App />);
    const headerElement = getByText(/Hey guys, Eddie here!/i);
    expect(headerElement).toBeInTheDocument();
  });

  test('renders footer text', () => {
    const { getByText } = render(<App />);
    const footerElement = getByText(/Designed and Developed by Eddie Estevez/i);
    expect(footerElement).toBeInTheDocument();
  });

  test('navigates to About page when About link is clicked', async () => {
    const { getByText, findByText } = render(<App />);
    
    const aboutLink = getByText('About Me');
    fireEvent.click(aboutLink);
  
    // Wait for the About page content to be rendered
    const aboutPageTitle = await findByText('Hello world!');
    expect(aboutPageTitle).toBeInTheDocument();
  });