import { describe, test, expect, vi, beforeEach } from 'vitest';
import axios from 'axios';
import GitClient from '../GitClient';

// Mock axios
vi.mock('axios');

describe('Git Client Tests', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('should return repository names for techiesyed', async () => {
    // Mock data
    const mockRepos = [
      { id: 1, name: 'react-app' },
      { id: 2, name: 'node-api' },
      { id: 3, name: 'python-scripts' }
    ];

    // Mock axios.get to return the mock data
    axios.get.mockResolvedValue({ data: mockRepos });

    // Call the method
    const repos = await GitClient.getRepositories('techiesyed');

    // Verify the results
    expect(repos).toEqual(['react-app', 'node-api', 'python-scripts']);
    expect(axios.get).toHaveBeenCalledWith('https://api.github.com/users/techiesyed/repos');
    expect(axios.get).toHaveBeenCalledTimes(1);
  });

  test('should handle API errors', async () => {
    // Mock axios.get to throw an error
    axios.get.mockRejectedValue(new Error('Network Error'));

    // Call the method and expect it to throw
    await expect(GitClient.getRepositories('invaliduser')).rejects.toThrow(
      'Failed to fetch repositories: Network Error'
    );
  });

  test('should return empty array for user with no repos', async () => {
    // Mock data - empty array
    axios.get.mockResolvedValue({ data: [] });

    // Call the method
    const repos = await GitClient.getRepositories('emptydemo');

    // Verify the results
    expect(repos).toEqual([]);
    expect(axios.get).toHaveBeenCalledWith('https://api.github.com/users/emptydemo/repos');
  });
});
