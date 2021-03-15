function read(key: string): string {
	return process.env[key] || '';
}

export function num(key: string, defaultValue: number): number {
	const value: number = parseInt(read(key));
	if (isNaN(value)) {
		return defaultValue;
	}
	return value;
}

export function bool(key: string, defaultValue: boolean): boolean {
	const value: string = read(key).toLowerCase();
	if (value === 'false') {
		return false;
	} else if (value === 'true') {
		return true;
	}
	return defaultValue;
}

export function str(key: string, defaultValue: string): string {
	return read(key) || defaultValue;
}

export function array(key: string, defaultValue: string[]): string[] {
	return read(key).split(',') || defaultValue;
}
