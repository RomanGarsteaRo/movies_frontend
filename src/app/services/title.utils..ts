export class TitleUtils {

	public static normalizeTitle(fileName: string | undefined): string | undefined {
		// https://en.wikipedia.org/wiki/Filename#Reserved_characters_and_words

		// TEST
		// 01. "3:10 to Yuma" -> "3 10 to Yuma"
		// 02. "300: Rise of an Empire" -> "300 Rise of an Empire"

		// Remove illegal characters from a file name but leave spaces
		// https://stackoverflow.com/questions/42210199/remove-illegal-characters-from-a-file-name-but-leave-spaces
		fileName = fileName?.replace(/[/\\?%*:|"<>]/g, ' ');
		// Remove double space
		fileName = fileName?.replace('  ', ' ');
		// The removes whitespace from both ends of a string.
		fileName = fileName?.trim();
		fileName = fileName?.toLowerCase();

		return fileName || undefined;
	}
}
