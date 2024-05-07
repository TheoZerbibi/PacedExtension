/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   console.js                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: thzeribi <thzeribi@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/08/03 17:29:27 by thzeribi          #+#    #+#             */
/*   Updated: 2024/05/06 20:57:12 by thzeribi         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

function PhoenixConsole() {
	for (let c in console) {
		if (typeof console[c] == 'function') {
			this[c] = console[c].bind(console, "%c[PacedExtension]%c", "color: #00babc;", "");
		}
	}
}

const iConsole = new PhoenixConsole();
